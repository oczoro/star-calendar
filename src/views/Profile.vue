<template>
  <div>
    <div :class="isIconPickerOpen ? 'blur-sm' : ''">
      <div class="w-1/2 mt-10 mx-auto text-white text-left">
        <h1 class="text-4xl text-center text-medium">Profile</h1>
        <div
          class="pt-5 w-full mx-auto flex flex-wrap justify-evenly align-middle content-center text-gray-800"
        >
          <div
            @click="openIconPicker"
            class="profile-icon w-fit h-fit p-5 flex justify-center align-middle content-center"
          >
            <span
              class="text-9xl w-[200px] h-[200px] text-center"
              style="line-height: inherit"
              >{{ profile_icon ? profile_icon : icon }}</span
            >
          </div>
          <div class="grow sm:ml-0 lg:ml-10 flex flex-col">
            <h2 class="text-3xl text-center md:text-left text-white">
              Change Name
            </h2>
            <form
              class="flex flex-col lg:flex-row mt-2"
              @submit.prevent="$emit('update-username', user_name)"
            >
              <input type="text" class="field w-full" v-model="user_name" />
              <button
                type="submit"
                class="btn mt-2 lg:mt-0 sm:ml-0 lg:ml-2 h-fit"
              >
                Change
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isIconPickerOpen" id="overlay">
      <IconPicker @closeIconPicker="closeIconPicker" />
    </div>
  </div>
</template>

<script setup>
import IconPicker from '../components/IconPicker.vue';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
  user_uid: String,
  user_name: String,
  icon: String,
});

const emit = defineEmits(['update-username', 'update-icon']);

const isIconPickerOpen = ref(false);
const profile_icon = ref(null);

const openIconPicker = () => {
  isIconPickerOpen.value = true;
};
const closeIconPicker = async (icon) => {
  if (icon) {
    profile_icon.value = icon;
    emit('update-icon', icon);
  }
  isIconPickerOpen.value = false;
};
</script>

<style scoped></style>
