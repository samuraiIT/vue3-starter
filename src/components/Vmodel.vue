<template>
    <input type="text" v-model="firstName" />
    <p>Hello my name is {{ firstName }}</p>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        let firstName = ref('')
        return { firstName }
    },
}
</script>

<style lang="scss" scoped>
input {
    border: 1px solid #212121;
    margin-bottom: 8px;
}
</style>
