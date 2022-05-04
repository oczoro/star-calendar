<template>
  <div class="grid grid-cols-7 gap-2 md:gap-4">
    <div
      @click="decrementMonth()"
      class="card select-none col-span-1 text-4xl text-gray-500"
    >
      <i class="fa-solid fa-caret-left"></i>
    </div>

    <p class="col-span-5 bg-transparent text-4xl text-gray-500">
      <select
        name="month"
        id="month-input"
        class="field p-2 mr-2 text-center-last"
        v-model="selected_month"
        @change="newCalendar()"
      >
        <option v-for="(month, index) in months" :key="index" :value="month">
          {{ month }}
        </option>
      </select>
      <select
        name="month"
        id="month-input"
        class="field p-2 ml-2 text-center-last"
        v-model="selected_year"
        @change="newCalendar()"
      >
        <option v-for="index in 2" :key="index" :value="index + 2020">
          {{ index + 2020 }}
        </option>
      </select>
    </p>

    <div
      @click="incrementMonth()"
      class="card select-none col-span-1 text-4xl text-gray-500"
    >
      <i class="fa-solid fa-caret-right"></i>
    </div>

    <p class="truncate col-span-1 text-center text-lg md:text-xl text-white">
      Sunday
    </p>
    <p class="truncate col-span-1 text-center text-lg md:text-xl text-white">
      Monday
    </p>
    <p class="truncate col-span-1 text-center text-lg md:text-xl text-white">
      Tuesday
    </p>
    <p class="truncate col-span-1 text-center text-lg md:text-xl text-white">
      Wednesday
    </p>
    <p class="truncate col-span-1 text-center text-lg md:text-xl text-white">
      Thursday
    </p>
    <p class="truncate col-span-1 text-center text-lg md:text-xl text-white">
      Friday
    </p>
    <p class="truncate col-span-1 text-center text-lg md:text-xl text-white">
      Saturday
    </p>

    <div
      class="card select-none h-16 w-16 lg:h-32 lg:w-32 md:h-24 md:w-24 p-1 md:p-3 lg:p-4"
      :class="getDayCardStatus(dayObj)"
      v-for="dayObj in calendar.days"
      :key="dayObj.day"
      @click="addStar(dayObj)"
    >
      <p
        class="text-left"
        :class="
          calendar.today == dayObj.day + 1
            ? 'text-sky-600 font-bold animate-bounce'
            : ''
        "
      >
        {{ dayObj.day + 1 }}
      </p>
      <figure class="text-2xl drop-shadow-md md:text-4xl lg:text-5xl">
        {{ dayObj.star }}
      </figure>
    </div>
    <!-- <div class="controls col-span-7 text-right">
          <button class="card-btn select-none" @click="clearDays">
            Clear All
          </button>
        </div> -->
  </div>
</template>

<script setup>
const currentDate = new Date();
const selected_month = ref('');
const selected_year = ref(null);
const calendar = ref(null);

selected_month.value = currentDate.toLocaleString('default', { month: 'long' });
selected_year.value = currentDate.getFullYear();

calendar.value = getCalendar();

function getCalendar() {
  const date = new Date(
    selected_year.value,
    months.value.indexOf(selected_month.value) + 1,
    0
  );
  const today =
    currentDate.getFullYear() == date.getFullYear() &&
    currentDate.getMonth() == date.getMonth()
      ? currentDate
      : null;
  return new Calendar(date, today);
}

function newCalendar() {
  calendar.value = getCalendar();
}

function incrementMonth() {
  let index = months.value.indexOf(selected_month.value) + 1;
  if (index > 11) {
    index = 0;
    selected_year.value = selected_year.value + 1;
  }

  selected_month.value = months.value[index];
  newCalendar();
}
function decrementMonth() {
  let index = months.value.indexOf(selected_month.value) - 1;
  if (index < 0) {
    index = 11;
    selected_year.value = selected_year.value - 1;
  }

  selected_month.value = months.value[index];
  newCalendar();
}

function addStar(day) {
  if (calendar.value.today == day.day + 1) {
    if (day.star) {
      day.star = '';
    } else if (checkDayStreak(day.day, 0, 4)) {
      day.star = '✨';
    } else if (checkDayStreak(day.day, 0, 1)) {
      day.star = '🌟';
    } else {
      day.star = '⭐';
    }
  }
}

function getDayCardStatus(day) {
  console.log(calendar.value.today);
  if (calendar.value.today == day.day + 1) {
    return 'border-sky-600 border-4';
  }
  return 'opacity-75';
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
</script>

<style scoped></style>
