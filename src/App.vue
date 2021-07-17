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
</style>
