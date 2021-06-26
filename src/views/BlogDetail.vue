<template>
    <main>
        <h1 class="text-3xl">{{ data.value[0].title }}</h1>
        <p>
            {{ data.value[0].description }}
        </p>

        <button class="bg-brand p-3 rounded text-white font-bold mt-4" @click="$router.go(-1)">
            Back
        </button>
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
            return data.en.filter(item => item.id == route.params.id)
        })
        const dataFr = computed(function () {
            return data.fr.filter(item => item.id == route.params.id)
        })

        // init data
        if (route.meta.lang === 'en') {
            data.value = dataEn.value
        } else {
            data.value = dataFr.value
        }
        // })
        watch(route, () => {
            if (route.meta.lang === 'en') {
                data.value = dataEn.value
            } else {
                data.value = dataFr.value
            }
        })

        return { route, data, dataEn, dataFr }
    },
}
</script>

<style scoped></style>
