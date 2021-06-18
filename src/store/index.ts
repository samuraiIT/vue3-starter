import { createStore } from 'vuex';
import ui from './modules/ui';
export default createStore({
    modules: {
        ui,
    },
});