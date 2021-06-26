<template>
    <main>
        {{ count }}
        <p v-for="post in data.value" :key="post">
            <router-link :to="{ name: `BlogDetail-${lang}`, params: { id: post.id } }">{{
                post.title
            }}</router-link>
        </p>
    </main>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import data from '../data/data.js'
export default {
    setup() {
        const route = useRoute()

        onMounted(() => {
            let data = async () => ref(data)
        })

        const dataEn = computed(function () {
            return data.en
        })
        const dataFr = computed(function () {
            return data.fr
        })

        /**
         * assign computed property to data object
         * correspong to page language
         */

        if (route.meta.lang === 'en') {
            data.value = dataEn.value
        } else {
            data.value = dataFr.value
        }

        const lang = ref(route.meta.lang) //default lang of the site
        watch(route, () => {
            if (route.meta.lang === 'en') {
                data.value = dataEn.value
            } else {
                data.value = dataFr.value
            }

            lang.value = route.meta.lang //reasign lang to page language
        })

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
