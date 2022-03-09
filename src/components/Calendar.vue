<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="grid grid-cols-7 gap-2 md:gap-4">
        <p class="col-span-7 text-center text-4xl text-white">
          {{ calendar.month }}
        </p>

        <p
          class="truncate col-span-1 text-center text-lg md:text-xl text-white"
        >
          Sunday
        </p>
        <p
          class="truncate col-span-1 text-center text-lg md:text-xl text-white"
        >
          Monday
        </p>
        <p
          class="truncate col-span-1 text-center text-lg md:text-xl text-white"
        >
          Tuesday
        </p>
        <p
          class="truncate col-span-1 text-center text-lg md:text-xl text-white"
        >
          Wednesday
        </p>
        <p
          class="truncate col-span-1 text-center text-lg md:text-xl text-white"
        >
          Thursday
        </p>
        <p
          class="truncate col-span-1 text-center text-lg md:text-xl text-white"
        >
          Friday
        </p>
        <p
          class="truncate col-span-1 text-center text-lg md:text-xl text-white"
        >
          Saturday
        </p>

        <div
          class="card select-none h-16 w-16 lg:h-32 lg:w-32 md:h-24 md:w-24 p-1 md:p-3 lg:p-4"
          v-for="dayObj in calendar.days"
          :key="dayObj.day"
          @click="addStar(dayObj)"
        >
          <p
            class="text-left"
            :class="
              calendar.today == dayObj.day + 1 ? 'text-red-600 font-bold' : ''
            "
          >
            {{ dayObj.day + 1 }}
          </p>
          <figure class="text-2xl md:text-4xl lg:text-5xl">
            {{ dayObj.star }}
          </figure>
        </div>
        <div class="controls col-span-7 text-right">
          <button class="card-btn select-none" @click="clearDays">
            Clear All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
const calendar = ref(null);

function getArrayOfDays(limit) {
  let days = [];
  for (var i = 0; i < limit; i++) {
    days.push({
      day: i,
      star: '',
    });
  }
  return days;
}

function getCurrentCalendar() {
  const currentDate = new Date();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const month = currentDate.toLocaleString('default', { month: 'long' });
  const days = getArrayOfDays(daysInMonth);
  const today = currentDate.getDate();

  return {
    month,
    days,
    today,
  };
}

function addStar(day) {
  if (day.star) {
    day.star = '';
  } else if (checkDayStreak(day.day, 0, 4)) {
    day.star = '🌠';
  } else if (checkDayStreak(day.day, 0, 1)) {
    day.star = '🌟';
  } else {
    day.star = '⭐';
  }
}

function clearDays() {
  calendar.value.days.forEach((day) => {
    day.star = '';
  });
}

function checkDayStreak(day, counter, end) {
  let index = day - counter - 1;

  if (counter == end) return true;

  if (index < 0) return false;

  if (!calendar.value.days[index].star) return false;

  return checkDayStreak(day, counter + 1, end);
}

calendar.value = getCurrentCalendar();
</script>

<style scoped></style>
