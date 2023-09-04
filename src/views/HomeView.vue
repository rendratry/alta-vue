<template>
  <div class="home">
    <HeaderFurniture/>
    <br>
    <h2>Produk Terlaris</h2>
    <ProductFurniture />
    <vs-button
        flat
        :active="active == 1"
        @click="active = 1"
        to = "/produk"
    >
      Tampilkan Semua Produk
    </vs-button>
    <br>
    <TestimoniView/>
    <br>
    <AppFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductFurniture from "@/components/Product.vue";
import HeaderFurniture from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import TestimoniView from "@/components/Testimoni.vue";

export default {
  name: 'HomeView',
  components: {
    TestimoniView,
    AppFooter,
    HeaderFurniture,
    ProductFurniture,
  }
}
</script>

<style scoped>
.home {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  text-align: justify;
  align-content: center;
}
</style>