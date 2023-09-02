import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from "@/layout/DefaultLayout.vue";
import homeView from "@/views/HomeView.vue";
import produkView from "@/views/ProdukView.vue";
import checkout from "@/components/Checkout.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: 'Home',
        component: homeView
      },
      {
        path: "/produk",
        name: 'Produk',
        component: produkView
      },
      {
        path: "/checkout",
        name: 'Checkout',
        component: checkout
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
