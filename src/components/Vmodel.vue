<template>
    <input type="text" v-model="firstName" />
    <p>Hello my name is {{ firstName }}</p>
</template>

<script setup>
import { ref } from 'vue'

const firstName = ref('')
</script>

<style lang="scss" scoped>
input {
    border: 1px solid #212121;
    margin-bottom: 8px;
}
</style>
