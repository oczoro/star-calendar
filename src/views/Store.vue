<template>
  <div class="w-3/4 mt-10 mx-auto text-white text-left">
    <h1 class="text-4xl text-center text-medium">Store</h1>
    <div
      class="reward-container pt-5 w-fit mx-auto flex flex-wrap justify-center align-middle content-center text-gray-800"
    >
      <div
        class="card w-52 m-2 text-center"
        v-for="index in rewards.length + 1"
        :key="index"
      >
        <div v-if="index <= rewards.length">
          <i
            class="w-20 h-20 text-7xl mx-auto text-sky-400 fa-solid fa-trophy"
          />
          <div class="flex flex-col p-2 justify-left align-middle">
            <h1 class="text-lg">Cool Reward</h1>
            <h1 class="text-lg">⭐{{ index * 10 }}</h1>
          </div>
        </div>
        <div v-else>
          <i
            class="w-20 h-20 text-7xl mx-auto text-gray-300 fa-solid fa-circle-plus"
          />
          <div class="flex flex-col p-2">
            <h1 class="text-lg">Add New</h1>
            <h1 class="text-lg">Reward</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const rewards = ref(null);
rewards.value = [1, 2, 3, 4, 5, 6];
</script>

<style scoped></style>
