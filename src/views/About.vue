<template>
    <main>
        <h1 class="text-3xl">{{ $t('about.title') }}</h1>
        <p class="text-left mt-4">
            {{ $t('about.text') }}
        </p>

        <ul>
            <li><a :href="$t('about.docs.vite')" target="_blank" rel="noopener">vite</a></li>
            <li><a :href="$t('about.docs.vuejs')" target="_blank" rel="noopener">vuejs</a></li>
            <li>
                <a :href="$t('about.docs.tailwind')" target="_blank" rel="noopener">tailwind</a>
            </li>
            <li><a :href="$t('about.docs.vueI18n')" target="_blank" rel="noopener">vue-i18n</a></li>
            <li>
                <a :href="$t('about.docs.vueRouter')" target="_blank" rel="noopener">vue-router</a>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    setup() {
        return {}
    },
}
</script>

<style scoped>
p {
    font-size: 1.2rem;
}
ul {
    margin-top: 2rem;
    list-style-type: disc;
}
li {
    text-align: left;
    font-size: 1.2rem;
    text-transform: capitalize;
    margin: 0.5rem 0;
}

a:hover {
    text-decoration: underline;
}
</style>
