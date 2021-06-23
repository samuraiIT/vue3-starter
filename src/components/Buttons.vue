<template>
    <h1 class="text-4xl mb-3">{{ msg }}</h1>
    <button @click="increment()" class="button">Increase total by 1</button>
    <button @click="decrement()" class="button" style="background: #ffcd2a">
        Decrease total by 1
    </button>
    <br />
    <span class="count">Total: {{ count }}</span>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        msg: '',
    },
    setup() {
        let count = ref(0)
        const increment = () => {
            count.value = count.value + 1
        }
        const decrement = () => {
            count.value = count.value - 1
        }
        return {
            count,
            increment,
            decrement,
        }
    },
}
</script>

<style scoped>
.button {
    display: inline-block;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    background: #41b883;
    margin: 0 8px 2rem;
}

.count {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-left: 8px;
}
</style>
