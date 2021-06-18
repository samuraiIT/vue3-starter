import { Lang } from '../../types/index';
interface UIState {
    lang: Lang | null;
    siteId: string | null;
}
export default {
    namespaced: true,
    state: () =>
        ({
            lang: null,
            siteId: null,
        } as UIState),
    getters: {
        lang: (state: UIState) => state.lang,
        siteId: (state: UIState) => state.siteId,
    },
    actions: {
        setLang({ commit }: { commit: Function }, lang: Lang) {
            if (lang) {
                commit('SET_LANG', lang);
            }
        },
        setSiteId({ commit }: { commit: Function }, siteId: string) {
            if (siteId) {
                commit('SET_SITE_ID', siteId);
            }
        },
    },
    mutations: {
        ['SET_LANG'](state: UIState, lang: Lang) {
            state.lang = lang;
        },
        ['SET_SITE_ID'](state: UIState, siteId: string) {
            state.siteId = siteId;
        },
    },
};