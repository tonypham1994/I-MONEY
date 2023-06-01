<template>
  <p>Logout...</p>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const logOut = async () => {
      await store.dispatch("logOut");
      router.push({ name: "Login", params: {} });
    };
    logOut();
    return {};
  },
};
</script>
