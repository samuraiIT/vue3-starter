<template>
    <main>
        <h1 class="text-3xl">{{ data.value[0].title }}</h1>
        <p>
            {{ data.value[0].description }}
        </p>

        <button class="bg-brand p-3 rounded text-white font-bold mt-4" @click="$router.go(-1)">
            {{$t('button.back')}}
        </button>
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

<style scoped></style>
