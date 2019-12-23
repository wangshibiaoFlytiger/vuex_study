import Vue from 'vue'
import Vuex from 'vuex';
import module1 from "./modules/module1";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        module1
    }
});

export default store;
