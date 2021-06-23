<template>
    <div class="locale-changer">
        <router-link :to="switchTo('fr')">Francais </router-link>
        <router-link :to="switchTo('en')">English </router-link>
        <router-link :to="{ name: `Home-${lang}` }">Home</router-link>
        <router-link :to="{ name: `Doc-${lang}` }">Documentation</router-link>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const lang = ref('en') //default lang of the site

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

        return { route, switchTo, lang }
    },
}
</script>

<style scoped>
a {
    display: inline-block;
    margin: 0 1rem 2rem;
}
</style>
