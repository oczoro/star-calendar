<template>
  <div class="w-3/4 mt-10 mx-auto text-white text-left">
    <h1 class="text-4xl text-center text-medium">Inventory</h1>
    <div
      class="reward-container pt-5 w-fit mx-auto flex flex-wrap justify-center align-middle content-center text-gray-800"
    >
      <div
        class="card w-52 m-2 text-center"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="w-fit h-fit text-7xl mx-auto text-sky-400">
          <div class="flex justify-center items-center h-32 w-32">
            {{ item.icon }}
          </div>
        </div>
        <div class="flex flex-col p-2 justify-left align-middle">
          <h1 class="text-lg">{{ item.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ items: Array });
</script>

<style scoped></style>
