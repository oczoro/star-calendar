<template>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center">
      <div class="flex justify-center">
        <Month
          :data="current_date"
          :today="today"
          :full_month="getFullMonth()"
          @update-month="updateCalendarMonth"
          @next-month="nextMonth"
          @prev-month="prevMonth"
          @today-clicked="todayClicked"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, useSSRContext } from 'vue';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { getUserCalendar, updateUserDate, updateUserBalance } from '../db_api';
import months from '../constants/Months';
import Month from './Month.vue';

const today = ref(new Date());
today.value = {
  month: today.value.getMonth() + 1,
  year: today.value.getFullYear(),
  day: today.value.getDate(),
};
const current_date = ref({
  month: today.value.month,
  year: today.value.year,
  days: [],
});
const current_index = ref(0);

let user_uid = null;
const user_calendar = ref(null);
const month_list = ref(null);

// Load Calendar Data
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      user_uid = user.uid;
      user_calendar.value = await getUserCalendar(user.uid);

      // Check if today's month is in user's calendar
      let foundToday = false;
      for (let index in user_calendar.value.months) {
        const calendar_month = user_calendar.value.months[index];
        const month = calendar_month.month;
        const year = calendar_month.year;
        if (today.value.month == month && today.value.year == year) {
          foundToday = true;
        }
      }
      if (!foundToday) {
        user_calendar.value.months.push(current_date.value);
      }

      // TEST DATA
      // user_calendar.value = {
      //   months: [
      //     { month: 1, year: 2022, days: [1, 3, 5] },
      //     { month: 2, year: 2022, days: [1, 2, 3, 4, 5, 20] },
      //     {
      //       month: 4,
      //       year: 2022,
      //       days: [5, 2, 8, 9, 7, 6],
      //     },
      //   ],
      // };

      // Generate Month List from Month Data
      month_list.value = getMonthList();
      current_index.value = month_list.value.length - 1;
      current_date.value = month_list.value[current_index.value];
    }
  });
});

function updateCalendarMonth(date) {
  // Check if date exists in User's Month List
  for (let index in month_list.value) {
    let month = month_list.value[index];
    if (month.month == getMonthIndex(date.month) && month.year == date.year) {
      current_index.value = index;
    }
  }

  // Update Current Date
  current_date.value = month_list.value[current_index.value];
}
function nextMonth() {
  if (current_index.value + 1 > month_list.value.length - 1) return;
  current_index.value++;
  current_date.value = month_list.value[current_index.value];
}
function prevMonth() {
  if (current_index.value - 1 < 0) return;
  current_index.value--;
  current_date.value = month_list.value[current_index.value];
}

async function todayClicked() {
  // Check And Get Month From List
  let check = user_calendar.value.months.find(
    (date = { month, year }) =>
      date.month == today.value.month && date.year == today.value.year
  );

  const today_date_index = user_calendar.value.months.indexOf(check);
  const today_day_index = check.days.indexOf(today.value.day);
  // Check if today is in days list
  if (today_day_index != -1) {
    // Remove Today From Days List
    user_calendar.value.months[today_date_index].days.splice(
      today_day_index,
      1
    );
    current_date.value.days[today.value.day - 1] = '';
  } else {
    // Add Today From Days List
    user_calendar.value.months[today_date_index].days.push(today.value.day);
    if (checkDayStreak(current_date.value.days, today.value.day - 1, 0, 3)) {
      current_date.value.days[today.value.day - 1] = '✨';
    } else if (
      checkDayStreak(current_date.value.days, today.value.day - 1, 0, 1)
    ) {
      current_date.value.days[today.value.day - 1] = '🌟';
    } else {
      current_date.value.days[today.value.day - 1] = '⭐';
    }
  }
  await updateUserDate(user_uid, user_calendar.value.months);
  let balance = [0, 0, 0];
  for (let index in month_list.value) {
    let month = month_list.value[index];
    month.days.forEach((day) => {
      if (day != '') {
        switch (day) {
          case '⭐':
            balance[0]++;
            break;
          case '🌟':
            balance[1]++;
            break;
          case '✨':
            balance[2]++;
            break;
        }
      }
    });
  }
  await updateUserBalance(user_uid, balance);
}

function getFullMonth() {
  return months[current_date.value.month - 1];
}

function getMonthList() {
  let list = [];
  const user_months = user_calendar.value.months;
  const first_month = user_months[0];
  const last_month = user_months[user_months.length - 1];

  let month = first_month.month;
  let year = first_month.year;

  while (year <= last_month.year) {
    // If Dates are same break
    if (month > last_month.month && year >= last_month.year) break;

    let days = [];
    // Check And Get Month From List
    let check = user_months.find(
      (date = { month, year }) => date.month == month && date.year == year
    );
    if (!!check) {
      days = getDayData(check);
    } else {
      days = getDayData({ month, year, days: [] });
    }

    list.push({ month, year, days });
    // Increment Date
    if (month < 12) {
      month = month + 1;
    } else {
      year = year + 1;
      month = 1;
    }
  }

  return list;
}

function getDayData(date) {
  let list = [];
  for (let i = 0; i <= getLastDayOfMonth(date); i++) {
    if (date.days.includes(i)) {
      list[i - 1] = '⭐';
    } else {
      list[i - 1] = '';
    }
  }

  for (let i = 1; i <= list.length; i++) {
    if (list[i]) {
      if (checkDayStreak(list, i, 0, 3)) {
        list[i] = '✨';
      } else if (checkDayStreak(list, i, 0, 1)) {
        list[i] = '🌟';
      }
    }
  }
  return list;
}

function checkDayStreak(days, day, counter, end) {
  let index = day - counter - 1;
  if (counter == end) return true;
  if (index < 0) return false;
  if (!days[index]) return false;

  return checkDayStreak(days, day, counter + 1, end);
}

function getLastDayOfMonth(date) {
  return new Date(date.year, date.month, 0).getDate();
}

function getMonthIndex(month) {
  return months.indexOf(month) + 1;
}
</script>

<style scoped></style>
