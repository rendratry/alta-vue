import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
  },
  mutations: {
    setProducts(state, param) {
      state.products = param;
    },
  },
  actions: {
    fetchProducts(store) {
      const config = {
        headers: {
          'x-api-key': '12345678' // Ganti dengan nilai API key yang sesuai
        },
      };
      // Simpan logika pemanggilan API di sini
      axios.get('http://api2.myfin.id:5500/rvfurniture/api/v1/getproduct', config)
          .then((response => {
            store.commit('setProducts', response.data.data);
          })
          .catch(error => {
            console.error(error);
          }));
    },
  },
})
