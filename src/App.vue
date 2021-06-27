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

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

main {
    padding: 3rem;
    max-width: 900px;
    margin: 0 auto;
}

p + p {
    margin-top: 1.25rem;
}
</style>
