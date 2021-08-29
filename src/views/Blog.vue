<template>
    <main v-if="data.value">
        <div v-for="post in data.value" :key="post">
            <div class="card flex mb-8 max-h-72">
                <div class="card__image flex-none w-48 relative">
                    <img
                        :src="post.img"
                        class="rounded-l-lg object-cover object-right h-full"
                        loading="lazy"
                    />
                </div>
                <form class="box-border flex-auto justify-start px-8 pt-4 border-2 border-l-0">
                    <div class="flex flex-wrap h-full">
                        <h1 class="text-xl font-semibold">{{ post.city }}</h1>
                        <div
                            class="
                                w-full
                                flex-none
                                text-md text-left
                                font-medium
                                text-gray-800
                                mt-2
                            "
                        >
                            <p>{{ post.description.slice(0, 200) }}...</p>
                        </div>
                        <router-link
                            :to="{ name: `BlogDetail-${lang}`, params: { slug: post.slug } }"
                            class="
                                inline-block
                                h-12
                                rounded-md
                                mt-6
                                px-4
                                py-3
                                bg-black
                                text-white
                                font-bold
                            "
                        >
                            {{ $t('button.readMore') }}
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useLang } from '/@/composable/useLang'

const { route, data, dataEn, dataFr, lang } = useLang()
</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
    .card {
        flex-direction: column;
        max-height: 100%;

        &__image {
            width: 100%;
            height: 16rem;

            img {
                width: 100%;
                height: 16rem;
                border-radius: 0;
                object-position: bottom;
            }
        }

        form {
            @apply border-2;
        }
    }
}
</style>
