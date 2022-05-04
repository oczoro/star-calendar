<template>
  <div class="flex">
    <Sidebar
      @update-page="updatePage"
      :username="user_name"
      :icon="user_icon"
      :balance="user_balance"
      :isLoggedIn="user_loggedin"
    />
    <div class="container">
      <h1 class="text-2xl text-white align-middle">
        star
        <span class="text-4xl star text-semibold">⋆</span>
        calendar
      </h1>
      <Pages
        @update_name="updateUsername"
        @update_icon="updateUserIcon"
        :current_page="selected_page"
        :userdata="user_data"
      />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import Pages from './Pages.vue';
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getUser } from '../db_api';

const user_data = ref({});
const user_name = ref('Friend');
const user_icon = ref('⭐');
const user_balance = ref([]);
const user_loggedin = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      user_loggedin.value = true;
      user_data.value = await getUser(user.uid);
      user_data.value['uid'] = user.uid;
      user_name.value = user_data.value.name;
      user_icon.value = user_data.value.icon;
      user_balance.value = user_data.value.balance;
    } else {
      user_loggedin.value = false;
    }
  });
});

const selected_page = ref('Calendar');
const updatePage = (page) => {
  selected_page.value = page;
};

const updateUsername = (username) => {
  user_name.value = username;
};

const updateUserIcon = (icon) => {
  user_icon.value = icon;
};
</script>

<style scoped></style>
