<template>
  <div class="w-1/3 mt-10 mx-auto text-white text-left">
    <h1 class="text-4xl text-center text-medium">Settings</h1>
    <div class="pt-5">
      <form class="flex flex-col text-black" @submit.prevent="changeEmail">
        <h2 class="text-3xl text-white">Change Email</h2>
        <input
          type="text"
          class="field mt-2"
          placeholder="New Email"
          v-model="new_email"
        />
        <input
          type="password"
          class="field mt-2"
          placeholder="Password"
          v-model="password_1"
        />
        <input
          type="password"
          class="field mt-2"
          placeholder="Confirm Password"
          v-model="password_2"
        />
        <div class="flex justify-center mt-2">
          <button type="submit" class="btn w-60">Change Email</button>
        </div>
      </form>
    </div>
    <div class="pt-5">
      <form class="flex flex-col text-black" @submit.prevent="changePassword">
        <h2 class="text-3xl text-white">Change Password</h2>
        <input
          type="password"
          class="field mt-2"
          placeholder="Current Password"
          v-model="current_password"
        />
        <input
          type="password"
          class="field mt-2"
          placeholder="New Password"
          v-model="new_password_1"
        />
        <input
          type="password"
          class="field mt-2"
          placeholder="Confirm New Password"
          v-model="new_password_2"
        />
        <div class="flex justify-center mt-2">
          <button type="submit" class="btn w-60">Change Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Change Email
const new_email = ref('');
const password_1 = ref('');
const password_2 = ref('');

// Change Password
const current_password = ref('');
const new_password_1 = ref('');
const new_password_2 = ref('');
const changePassword = () => {
  console.log('change password');
};
</script>

<style scoped></style>
