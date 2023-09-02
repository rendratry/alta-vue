<template>
  <div class="home">
    <HeaderFurniture/>
    <br>
    <ProductFurniture />
    <br>
    <AppFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductFurniture from "@/components/Product.vue";
import HeaderFurniture from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: 'HomeView',
  components: {
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