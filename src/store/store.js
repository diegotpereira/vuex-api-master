import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        moedas: []
    },
    actions: {
        carregarMoedas({ commit }) {
            axios
            .get('http://localhost:4000/resultados')
            .then(r => r.data)
            .then(moedas => {
                commit('SET_MOEDAS', moedas)
            })
        }
    },
    mutations: {
        SET_MOEDAS (state, moedas) {
            state.moedas = moedas
        }
    },
    getters: {

    }
})