<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit.prevent="signUp" action="">
        <div class="row">
          <label for="fullname" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input
              type="text"
              id="fullName"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border"
              placeholder="iMoney..."
              v-model="name"
            />
          </label>
        </div>
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input
              type="text"
              id="email"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border"
              placeholder="Email"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label for="name" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input
              type="password"
              id="name"
              class="px-4 py-3 rounded-lg border-gray-100 mt-1 border"
              placeholder="Password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button type="submit" class="py-3 text-center w-full bg-blue-700">
            Sign Up
          </button>
        </div>
      </form>
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Login', params: {} }">Sign In</router-link>
        </span>
      </div>
      <!-- show err -->
      <div v-if="error">
        <span class="text-red-500">
          {{ error }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const error = ref(null);
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const store = useStore();
    const signUp = async () => {
      error.value = null;
      try {
        await store.dispatch("register", {
          email: email.value,
          password: password.value,
          name: name.value,
        });
      } catch (err) {
        error.value = err.message;
      }
      if (!error.value) {
        router.push({ name: "Profile", params: {} });
      }
    };
    return { error, name, email, password, signUp };
  },
};
</script>
