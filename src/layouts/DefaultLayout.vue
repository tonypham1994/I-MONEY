<template>
  <navigation-header></navigation-header>
  <slot />
  <navigation-button />
</template>

<script>
import NavigationButton from "@/components/NavigationButton.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
export default {
  components: { NavigationButton, NavigationHeader },
};
</script>
