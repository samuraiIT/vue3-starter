<template>
    <main>
        <div class="hero">
            <img :src="data.value[0].img" class="object-cover object-bottom h-80 w-full" />
        </div>
        <h1 class="text-6xl mt-8">{{ data.value[0].city }}</h1>
        <p class="mt-8 text-left">
            {{ data.value[0].description }}
        </p>

        <ul class="text-left mt-8">
            <li><span class="text-xl font-bold">Area</span>: {{ data.value[0].area }}</li>
            <li>
                <span class="text-xl font-bold">Population</span>: {{ data.value[0].population }}
            </li>
        </ul>

        <button
            class="block bg-black px-6 py-3 rounded text-white font-bold mt-4"
            @click="$router.go(-1)"
        >
            {{ $t('button.back') }}
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
