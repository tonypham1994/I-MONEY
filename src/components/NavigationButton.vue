<template>
  <footer id="footer" class="fixed w-full bottom-0 bg-white py-4">
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const navItems = reactive([
      {
        icon: "t2ico-category",
        text: "home",
        name: "home",
      },
      {
        icon: "t2ico-chart ",
        text: "Report",
        name: "home",
      },
      {
        icon: "t2ico-presentation",
        text: "Budget",
        name: "home",
      },
      {
        icon: "t2ico-profile",
        text: "Profile",
        name: "Profile",
      },
    ]);
    return { navItems };
  },
};
</script>

<style scoped lang="css">
footer#footer::before,
footer#footer::after {
  transform: translateX(-50%);
  left: 50%;
}
footer#footer::before {
  @apply absolute;
  content: "";
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  top: 0;
}
footer#footer::after {
  @apply absolute -top-6 flex items-center justify-center text-white;
  @apply bg-primary w-12 h-12 rounded-full;
  content: "\e921";
  font-family: "t2ico";
}
</style>
