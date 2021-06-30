<template>
    <header class="bg-gray-50 border-b flex flex-wrap items-center justify-center p-5">
        <nav>
            <router-link :to="{ name: `Home-${lang}` }">{{$t('header.home')}}</router-link>
            <router-link :to="{ name: `About-${lang}` }">{{$t('header.about')}}</router-link>
            <router-link :to="{ name: `Blog-${lang}` }">{{$t('header.blog')}}</router-link>
        </nav>
        <div class="lang-switcher" v-if="route.meta.lang === 'en'">
            <router-link
                :to="switchTo('fr')"
                class="active"
                lang="fr"
                hreflang="fr"
                @click="toggleLang()"
                >Francais
            </router-link>
        </div>
        <div class="lang-switcher" v-else>
            <router-link
                :to="switchTo('en')"
                class="active"
                lang="en"
                hreflang="en"
                @click="toggleLang()"
                >English
            </router-link>
        </div>
    </header>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const lang = ref('en') //default lang of the site
        const active = ref(true)

        /**
         * Set the value of lang accordingly
         * to the meta value of the route
         * Possible lang (fr,en)
         */
        watch(route, () => {
            if (route.meta.lang !== 'en') {
                lang.value = 'fr'
            } else {
                lang.value = 'en'
            }
        })

        const switchTo = lang => {
            const routeName = route.name
            if (routeName) {
                const name = routeName.split('-')[0] // strip '-lang' from routeName.
                return name ? { name: `${name}-${lang}` } : null
            }
            return {}
        }

        const toggleLang = () => {
            active.value = !active.value
        }
        return { route, switchTo, lang, active, toggleLang }
    },
}
</script>

<style scoped>
header a {
    /* padding-right: 1rem; */
    font-weight: 500;
}

nav {
    width: 800px;
}

nav a {
    display: inline-block;
    padding: 0.25rem 1rem;
    width: 25%;
    border-radius: 4px;
    line-height: 1.75;
    margin: 0 0.25rem;
    transition: 0.21s;
}

nav a.router-link-active,
nav a:hover {
    @apply bg-gray-300;
}

.lang-switcher {
    position: absolute;
    right: 2rem;
}

.lang-switcher a {
    display: none;
}

.lang-switcher a.active {
    display: block;
}
</style>
