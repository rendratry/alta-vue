<template>
  <div class="container">
    <vs-row :vs-gutter="16" class="card">
      <vs-col v-for="product in listProducts" :key="product.id_product" :w="{ default: 4, sm: 6 }">
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
              <span class="span">54</span>
            </vs-button>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'AllProductFurniture',
  computed: {
    listProducts() {
      return this.$store.state.allProducts || [];
    },
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 20px;
}

.card {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

@media (min-width: 600px) {
  .card { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .card { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width > 900px) {
  .card { grid-template-columns: repeat(4, 1fr); }
}

/* Hapus styling tambahan jika tidak diperlukan */
</style>
