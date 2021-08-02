<template>
    <Navigation />
    <router-view />
</template>

<script>
import Navigation from '/@/components/Navigation.vue'
export default {
    components: {
        Navigation,
    },
    setup() {
        return {}
    },
}
</script>

<style lang="scss">
h1 {
    font-size: 48px;
}

h2 {
    font-size: 32px;
}

section {
    border-bottom: 1px solid rgba(#212121, 0.1);
}
</style>
