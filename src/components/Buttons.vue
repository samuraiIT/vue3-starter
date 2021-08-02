<template>
    <button v-if="role === 'increment'" @click="increment()" class="button">
        {{ $t('button.increase') }} 1
    </button>
    <button
        v-else-if="role === 'decrement'"
        @click="decrement()"
        class="button"
        style="background: #ffcd2a"
    >
        {{ $t('button.increase') }} 1
    </button>

    total: {{ count }}
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        role: '',
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
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    background: #41b883;
    margin: 0 8px 2rem 0;
}

.count {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-left: 8px;
}
</style>
