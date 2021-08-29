<template>
    <main>
        <h1>Vue Sandbox</h1>
        <section>
            <h2>Button and passing props</h2>
            <Buttons msg="message props" role="increment" />
        </section>
        <section>
            <h2>V-model</h2>
            <Vmodel />
        </section>
        <section>
            <h2>V-model #2</h2>
            <Colors />
        </section>
    </main>
</template>

<script setup>
import Buttons from '/@/components/Buttons.vue'
import Vmodel from '/@/components/Vmodel.vue'
import Colors from '/@/components/Colors.vue'
</script>

<style scoped>
section {
    max-width: 400px;
    margin: 24px 0;
    text-align: left;
}
</style>
