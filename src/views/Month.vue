<template>
  <div>
    <div class="grid grid-cols-7 gap-2 md:gap-4">
      <div
        @click="$emit('prev-month')"
        class="card select-none col-span-1 text-4xl text-gray-500"
      >
        <i class="fa-solid fa-caret-left"></i>
      </div>

      <p class="col-span-5 bg-transparent text-4xl text-gray-500">
        <select
          name="month"
          id="month-input"
          class="field p-2 mr-2 text-center-last"
          v-model="full_month"
          @change="
            $emit('update-month', { month: full_month, year: data.year })
          "
        >
          <option v-for="(month, index) in months" :key="index" :value="month">
            {{ month }}
          </option>
        </select>
        <select
          name="month"
          id="month-input"
          class="field p-2 ml-2 text-center-last"
          v-model="data.year"
          @change="
            $emit('update-month', { month: full_month, year: data.year })
          "
        >
          <option v-for="index in 4" :key="index" :value="index + 2020">
            {{ index + 2020 }}
          </option>
        </select>
      </p>

      <div
        @click="$emit('next-month')"
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
        v-for="(day, index) in data.days"
        :key="index"
        @click="
          isToday({ year: data.year, month: data.month, day: index })
            ? $emit('today-clicked')
            : ''
        "
      >
        <p
          class="text-left"
          :class="
            isToday({ year: data.year, month: data.month, day: index })
              ? 'text-sky-600 font-bold animate-bounce'
              : ''
          "
        >
          {{ index + 1 }}
        </p>
        <figure class="text-2xl drop-shadow-md md:text-4xl lg:text-5xl">
          {{ day }}
        </figure>
      </div>
    </div>
  </div>
</template>

<script setup>
import months from '../constants/Months';

const props = defineProps({
  data: Object,
  today: Object,
  full_month: String,
});

const isToday = (date) => {
  return (
    props.today.year == date.year &&
    props.today.month == date.month &&
    props.today.day == date.day + 1
  );
};
</script>

<style scoped></style>
