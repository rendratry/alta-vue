import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        "id_product": "ec6dba83-0016-4e05-a9ce-7287da8a2f86",
        "name": "Meja Minimalis",
        "description": "furniture minimalis untuk segala bentuk kebutuhan rumah, cafe, dan tempat bersantai",
        "photo": "https://images.unsplash.com/photo-1564464315-bd88cbe6f3e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2528&q=80",
        "price": 450000
      },
      {
        "id_product": "ec6dba83-0016-4e05-a9ce-7287da8a2f87",
        "name": "Kursi Minimalis Korean Looks",
        "description": "Kursi minimalis bergaya korea untuk kerja, cafe dan santai",
        "photo": "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
        "price": 400000
      },
      {
        "id_product": "ec6dba83-0016-4e05-a9ce-7287da8a2f57",
        "name": "Kursi Minimalis Korean Looks",
        "description": "Kursi minimalis bergaya korea untuk kerja, cafe dan santai",
        "photo": "https://design-milk.com/images/2015/03/AndNew-British-furniture-1.jpg",
        "price": 400000
      },
      {
        "id_product": "ec6dba83-0016-4e05-a9ce-7281da8a2f57",
        "name": "Kursi Minimalis Korean Looks",
        "description": "Kursi minimalis bergaya korea untuk kerja, cafe dan santai",
        "photo": "https://weburbanist.com/wp-content/uploads/2014/10/modular-living-room-set-960x640.jpg",
        "price": 400000
      }
    ]
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
          'x-api-key': '12345678'
        },
      };
      // Simpan logika pemanggilan API di sini
      axios.get('https://pemilih.online/rvfurniture/api/v1/getproduct', config)
          .then((response => {
            store.commit('setProducts', response.data.data);
          })
          .catch(error => {
            console.error(error);
          }));
    },

    fetchLogin (store){
      const config = {
        headers: {
          'x-api-key': '12345678' // Ganti dengan nilai API key yang sesuai
        },
      };
      // Simpan logika pemanggilan API di sini
      axios.get('https://pemilih.online/rvfurniture/api/v1/login', config)
          .then((response => {
            store.commit('setProducts', response.data.data);
          })
              .catch(error => {
                console.error(error);
              }));
    },
  },
})
