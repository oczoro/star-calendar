<template>
  <div class="pt-4">
    <Calendar v-show="props.current_page == 'Calendar'" />
    <Store v-show="props.current_page == 'Store'" />
    <Inventory
      v-show="props.current_page == 'Inventory'"
      :items="props.userdata.items"
    />
    <Profile
      v-show="props.current_page == 'Profile'"
      :user_uid="props.userdata.uid"
      :user_name="props.userdata.name"
      :icon="props.userdata.icon"
      @update-username="updateUsername"
      @update-icon="updateIcon"
    />
    <Settings v-show="props.current_page == 'Settings'" />
  </div>
</template>

<script setup>
import { updateUserName, updateUserIcon } from '../db_api';
import Calendar from './Calendar.vue';
import Store from './Store.vue';
import Inventory from './Inventory.vue';
import Profile from './Profile.vue';
import Settings from './Settings.vue';

const props = defineProps({ userdata: Object, current_page: String });
const emit = defineEmits(['update_name', 'update_icon']);

const updateUsername = async (username) => {
  await updateUserName(props.userdata.uid, username);
  emit('update_name', username);
};
const updateIcon = async (icon) => {
  await updateUserIcon(props.userdata.uid, icon);
  emit('update_icon', icon);
};
</script>

<style scoped></style>
