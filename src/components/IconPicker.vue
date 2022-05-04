<template>
  <div
    class="w-[60%] absolute top-[60%] lg:top-1/2 left-[55%] -translate-x-1/2 -translate-y-2/3"
  >
    <h1 class="absolute right-1 left-1 text-3xl font-medium text-center">
      Selecte Profile Icon
    </h1>
    <div
      @click="$emit('closeIconPicker')"
      class="absolute z-10 right-1 cursor-pointer text-xl"
    >
      <i class="pt-2 pr-1 fa-solid fa-circle-xmark"></i>
    </div>
    <div class="modal-card p-10 flex flex-wrap justify-center align-middle">
      <span
        class="icon-button flex text-center justify-center w-[80px] h-[80px] text-5xl m-2"
        v-for="(icon, index) in icons"
        @click="selectIcon(icon)"
        :key="index"
      >
        <span class="self-center">{{ icon }}</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['closeIconPicker']);

const icons = [
  '⭐',
  '🐢',
  '🦇',
  '🎂',
  '🌹',
  '🌵',
  '🤠',
  '🤡',
  '👽',
  '👻',
  '🤖',
  '👾',
  '🐲',
  '🐔',
  '🐸',
  '🦝',
  '🐼',
  '🐊',
  '🐍',
  '🦈',
  '🐬',
  '🐙',
  '🦐',
  '🕷',
  '🦗',
  '🧠',
];

const props = defineProps({
  icon: String,
});

const selected_icon = ref(null);

const selectIcon = (icon) => {
  emit('closeIconPicker', icon);
};
</script>

<style scoped></style>
