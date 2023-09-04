<template>
  <div class="container">
    <header>
      <h1>Pilih Produk</h1>
      <p>Pilih produk yang kamu inginkan</p>
    </header>
    <div class="produk">
      <AllProductFurniture/>
      <br>
      <AppFooter/>
    </div>
  </div>
</template>
<script>

import AllProductFurniture from "@/components/AllProduct.vue";
import AppFooter from "@/components/Footer.vue";
export default {
  name: 'ProductView',
  components: {AppFooter, AllProductFurniture},
}
</script>

<style scoped>
.produk {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  text-align: justify;
  align-content: center;
}
</style>