<template>
  <h1>{{ $t("home") }}</h1>
  <Buttons msg="Welcome to Vite & Vue3 Starter" />
</template>

<script>
import Buttons from "../components/Buttons.vue";
export default {
  components: {
    Buttons,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
