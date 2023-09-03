<template>
  <div class="container">
    <h2>Produk Terlaris</h2>
    <vs-row>
      <vs-col v-for="product in listProducts" :key="product.id_product" vs-type="flex" vs-justify="center" vs-align="center" w="4">
        <vs-card>
          <template #title>
            <h3>{{ product.name }}</h3>
          </template>
          <template #img>
            <img :src="product.photo" alt="">
          </template>
          <template #text>
            <p>
              {{ product.description }}
            </p>
            <h3>Rp {{ product.price }}</h3>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class='bx bx-heart'></i>
            </vs-button>
            <vs-button class="btn-chat" shadow primary>
              <i class='bx bx-chat' ></i>
              <span class="span">
          54
        </span>
            </vs-button>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
    <br>
    <vs-button
        flat
        :active="active == 1"
        @click="active = 1"
    >
      Tampilkan Semua Produk
    </vs-button>
  </div>
</template>
<script>
export default {
  name: 'ProductFurniture',
  created() {
    this.doFetchProduct();
  },
  methods: {
    async doFetchProduct(){
      await this.listProducts;
    }
  },
  computed: {
    listProducts() {
      return this.$store.dispatch('fetchProducts')
    },
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 20px;
  text-align: justify;
  align-content: center;
}

</style>