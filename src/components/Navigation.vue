<template>
  <h1 class="text-4xl">{{ route.meta.lang }}</h1>
  <button @click="langSwitch()">{{ lang }}</button>
  <router-link :to="{ name: `Home-${lang}` }">Home</router-link>
  <router-link :to="{ name: `About-${lang}` }">About</router-link>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const lang = ref("en");

    const langSwitch = () => {
      if (route.meta.lang === "en") {
        route.meta.lang = "fr";
        lang.value = "fr";
      } else if (route.meta.lang === "fr") {
        route.meta.lang = "en";
        lang.value = "en";
      }
      console.log(route.meta.lang);
    };

    watch(route, (value) => {
      if (route.meta.lang === "fr") {
        lang.value = "fr";
      } else {
        lang.value = "en";
      }
    });
    return { route, lang, langSwitch };
  },
};
</script>

<style scoped>
a {
  display: inline-block;
  margin: 0 1rem 2rem;
}
</style>
