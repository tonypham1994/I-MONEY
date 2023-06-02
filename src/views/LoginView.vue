<template>
  <div class="mt-8">
    <div class="container mx-auto px8">
      <form @submit.prevent="signIn" action="">
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input
              required
              type="text"
              id="email"
              class="px4 rounded-lg border-gray-100 mt-1 border"
              placeholder="Email"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label for="name" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input
              required
              type="password"
              id="name"
              class="px4 rounded-lg border-gray-100 mt-1 border"
              placeholder="Password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button type="submit" class="py-3 text-center w-full bg-primary mt-4">
            Login
          </button>
        </div>
      </form>
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Register', params: {} }"
            >Sign Up</router-link
          >
        </span>
      </div>

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
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const email = ref("");
    const password = ref("");
    const error = ref("");

    const signIn = async () => {
      try {
        await store.dispatch("logIn", {
          email: email.value,
          password: password.value,
        });
      } catch (err) {
        error.value = err.message;
      }
      if (!error.value) {
        router.push({ name: "Profile", params: {} });
      }
    };
    return { email, password, signIn, error };
  },
};
</script>
