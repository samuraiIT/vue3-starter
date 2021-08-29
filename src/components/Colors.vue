<template>
    <select v-model="selection">
        <option v-for="color in colors" :value="color" :key="color" selected>{{ color }}</option>
    </select>

    <div class="square" :style="{ backgroundColor: selection }"></div>
</template>

<script setup>
import { ref } from 'vue'

let colors = ref(['red', 'green', 'blue'])
let selection = ref(colors.value[0])
</script>

<style lang="scss" scoped>
input,
select {
    border: 1px solid #212121;
    margin-bottom: 8px;
}

.square {
    height: 60px;
    width: 60px;
    border: 1px solid #212121;
}
</style>
