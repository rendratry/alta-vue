<template>
  <div class="container">
    <header>
      <h1>Pilih Produk</h1>
      <p>Pilih produk yang kamu inginkan</p>
    </header>
    <div class="produk">
      <ProductFurniture/>
    </div>
  </div>
</template>
<script>

import ProductFurniture from "@/components/Product.vue";
export default {
  name: 'ProductView',
  components: {ProductFurniture},
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