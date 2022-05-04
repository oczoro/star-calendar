<template>
  <div :class="isModalToggled ? 'blur-sm' : ''">
    <Navbar />
    <div class="flex justify-center align-middle">
      <div class="flex-1 flex flex-col justify-center">
        <div class="container mb-20 ml-10">
          <h1 class="text-4xl text-white p-4">Start Tracking Your Progress!</h1>
          <button @click="showModal('Register')" class="btn py-4 px-8 text-2xl">
            Let's Go!
          </button>
        </div>
      </div>
      <div class="image flex-1 flex overflow-hidden" style="perspective: 400px">
        <img
          src="../assets/landing_1.png"
          style="transform: rotateY(-10deg)"
          alt=""
        />
      </div>
    </div>
  </div>
  <div v-if="isModalToggled" id="overlay">
    <LoginForm
      :modalType="current_modal_type"
      @closeModal="isModalToggled = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import LoginForm from '../components/LoginForm.vue';
const route = useRouter();

const isModalToggled = ref(false);
const current_modal_type = ref(null);

function showModal(modal_type) {
  isModalToggled.value = !isModalToggled.value;
  current_modal_type.value = modal_type;
}
</script>

<style scoped></style>
