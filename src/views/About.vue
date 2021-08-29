<template>
    <main>
        <h1 class="text-3xl">{{ $t('about.title') }}</h1>
        <p class="text-left mt-4">
            {{ $t('about.text') }}
        </p>

        <ul>
            <li>
                <a :href="$t('about.docs.vite')" target="_blank" rel="noopener"
                    >vite <img src="/@/assets/images/external.svg"
                /></a>
            </li>
            <li>
                <a :href="$t('about.docs.vuejs')" target="_blank" rel="noopener"
                    >vuejs <img src="/@/assets/images/external.svg"
                /></a>
            </li>
            <li>
                <a :href="$t('about.docs.tailwind')" target="_blank" rel="noopener"
                    >tailwind <img src="/@/assets/images/external.svg"
                /></a>
            </li>
            <li>
                <a :href="$t('about.docs.vueI18n')" target="_blank" rel="noopener"
                    >vue-i18n <img src="/@/assets/images/external.svg"
                /></a>
            </li>
            <li>
                <a :href="$t('about.docs.vueRouter')" target="_blank" rel="noopener"
                    >vue-router <img src="/@/assets/images/external.svg"
                /></a>
            </li>
        </ul>
    </main>
</template>

<script setup></script>

<style lang="scss" scoped>
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
    a {
        display: flex;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
