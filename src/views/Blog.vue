<template>
    <main>
        {{ lang }} <br />
        {{ route.params }}
        <p v-for="post in data.value" :key="post">
            <router-link :to="{ name: `BlogDetail-${lang}`, params: { id: post.id } }">{{
                post.title
            }}</router-link>
        </p>
    </main>
</template>

<script>
import { useLang } from '/@/composable/useLang'
export default {
    setup() {
        const { route, data, dataEn, dataFr, lang } = useLang()

        return { route, data, dataEn, dataFr, lang }
    },
}
</script>

<style scoped>
a {
    display: block;
    border: 3px solid red;
    position: relative;
}
</style>
