<template>
  <aside class="w-72 h-screen" aria-label="Sidebar">
    <div
      class="overflow-y-auto h-full py-10 px-5 bg-white border-gray-300 shadow-lg border-2 rounded-sm"
    >
      <div class="space-y-4 flex h-full flex-col justify-between">
        <ul class="flex flex-col justify-between">
          <li>
            <h1 class="text-2xl pb-5">
              <span class="text-4xl">{{ icon }}</span>
              Yo,
              <span class="text-red-600 font-semibold">{{ username }}</span
              >!
            </h1>
            <h1
              class="flex flex-col w-fit text-left mx-auto md:text-center md:flex-row md:justify-evenly text-xl pb-6"
            >
              <!-- <span class="w-20">⭐{{ 8 }}</span>
              <span class="w-20">🌟{{ 4 }}</span>
              <span class="w-20">✨{{ 2 }}</span> -->
              <span class="w-20">⭐{{ balance[0] }}</span>
              <span class="w-20">🌟{{ balance[1] }}</span>
              <span class="w-20">✨{{ balance[2] }}</span>
            </h1>
          </li>
          <hr class="flex border-slate-400 border-1 border-solid justify-end" />
          <li>
            <div
              @click="$emit('update-page', 'Calendar')"
              class="cursor-pointer mt-2 flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"
            >
              <i class="fa-fw text-xl fa-solid fa-calendar"></i>
              <span class="ml-3 text-xl">Calendar</span>
            </div>
          </li>
          <li>
            <div
              @click="$emit('update-page', 'Store')"
              class="cursor-pointer mt-2 flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"
            >
              <i class="fa-fw text-xl fa-solid fa-trophy"></i>
              <span class="ml-3 text-xl">Store</span>
            </div>
          </li>
          <li></li>
          <li>
            <div
              @click="$emit('update-page', 'Inventory')"
              class="cursor-pointer mt-2 flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"
            >
              <i class="fa-fw text-xl fa-solid fa-briefcase"></i>
              <span class="ml-3 text-xl">Inventory</span>
            </div>
          </li>
          <li>
            <div
              @click="$emit('update-page', 'Profile')"
              class="cursor-pointer mt-2 flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"
            >
              <i class="fa-fw text-xl fa-solid fa-user"></i>
              <span class="ml-3 text-xl">Profile</span>
            </div>
          </li>
          <li>
            <div
              @click="$emit('update-page', 'Settings')"
              class="cursor-pointer mt-2 flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"
            >
              <i class="fa-fw text-xl fa-solid fa-gear"></i>
              <span class="ml-3 text-xl">Settings</span>
            </div>
          </li>
        </ul>
        <div class="flex flex-col justify-between">
          <hr class="flex border-slate-400 border-1 border-solid justify-end" />
          <div class="pt-5">
            <a
              @click="handleSignOut()"
              class="flex cursor-pointer items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:backdrop-brightness-95 group"
            >
              <i class="fa-fw text-xl fa-solid fa-arrow-right-from-bracket"></i>
              <span class="ml-3 text-xl">Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { getAuth, signOut } from 'firebase/auth';
import router from '../router';

const props = defineProps({
  username: String,
  icon: String,
  isLoggedIn: Boolean,
  balance: Array,
});

let auth = getAuth();
function handleSignOut() {
  if (props.isLoggedIn) {
    signOut(auth).then(() => {
      router.push('/');
    });
  }
}
</script>

<style scoped></style>
