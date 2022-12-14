<template>
  <form
    class="w-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3"
    @submit.prevent="submitForm">
    <div
      @click="$emit('closeModal')"
      class="absolute right-1 cursor-pointer text-xl">
      <i class="pt-2 pr-1 fa-solid fa-circle-xmark"></i>
    </div>
    <div class="modal-card p-10 flex flex-col">
      <h1 class="text-3xl">{{ primary_option }}</h1>
      <input
        v-if="primary_option == 'Register'"
        class="p-2 mt-4 border-2 border-solid border-gray-300"
        type="text"
        placeholder="Name"
        v-model="username" />
      <input
        class="p-2 mt-4 border-2 border-solid border-gray-300"
        type="text"
        placeholder="Email"
        v-model="email" />
      <input
        class="p-2 mt-4 border-2 border-solid border-gray-300"
        type="password"
        placeholder="Password"
        v-model="password" />
      <div
        class="text-red-600 pt-2"
        v-if="errMsg">
        {{ errMsg }}
      </div>
      <button
        class="btn mt-4"
        type="submit">
        Submit
      </button>
      <hr class="mt-4 bg-black" />
      <div
        class="mt-2 hover:underline cursor-pointer"
        @click="toggleOption()">
        {{ primary_option == 'Login' ? 'Register' : 'Login' }}
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { createUser } from '../db_api';
import User from '../models/User';
import UserCalendar from '../models/UserCalendar.js';

const props = defineProps(['modalType']);
const username = ref('');
const email = ref('');
const password = ref('');
const errMsg = ref();
const primary_option = ref(props.modalType);
const router = useRouter();

function toggleOption() {
  primary_option.value = primary_option.value == 'Login' ? 'Register' : 'Login';
  errMsg.value = '';
}

function submitForm() {
  if (primary_option.value == 'Register') {
    if (username.value) {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(async (data) => {
          const today = new Date();
          console.log(today.getMonth(), today.getFullYear());
          const uid = data.user.uid;

          const user = new User(username.value, email.value);
          const user_calendar = new UserCalendar(today.getMonth(), today.getFullYear());

          createUser(uid, user.returnOBJ(), user_calendar.returnOBJ());

          router.push('/star-calendar/dashboard');
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case 'auth/email-already-in-use':
              errMsg.value = 'An account with that email is already created';
              break;
            case 'auth/weak-password':
              errMsg.value = 'Weaak password bud.';
              break;
            default:
              errMsg.value = error.code;
          }
        });
    } else {
      errMsg.value = 'Please provide a name';
    }
  } else if (primary_option.value == 'Login') {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        router.push('/star-calendar/dashboard');
      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case 'auth/invalid-email':
            errMsg.value = 'Invalid email';
            break;
          case 'auth/user-not-found':
            errMsg.value = 'No account with that email was found';
            break;
          case 'auth/wrong-password':
            errMsg.value = 'Incorrect password';
            break;
          case 'auth/email-already-in-use':
            errMsg.value = 'An account with that email is already created';
            break;
          default:
            errMsg.value = 'Email or password was incorrect';
            break;
        }
      });
  }
}
</script>

<style scoped></style>
