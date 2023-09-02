<template>
  <div class="checkout">
    <!-- Header -->
    <header>
      <h1>Checkout</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <!-- Konten Checkout -->
    <vs-row>
      <!-- Kolom Produk -->
      <vs-col vs-w="6">
        <vs-card>
          <template #title>
            Produk
          </template>
          <img src="gambar-produk.jpg" alt="Gambar Produk" class="product-image">
        </vs-card>
      </vs-col>

      <!-- Kolom Checkout -->
      <vs-col vs-w="6">
        <vs-card>
          <template #title>
            Checkout
          </template>
          <div class="checkout-info">
            <div class="product-name">Nama Produk</div>
            <div class="total">Total Harga: $10.00</div>
            <vs-button @click="checkout" color="primary" class="checkout-button">Checkout</vs-button>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'CheckoutFurniture',
  methods: {
    checkout() {
      // Logika untuk menyelesaikan proses checkout
      console.log('Checkout berhasil');
    },
  },
};
</script>

<style scoped>
.checkout {
  padding: 20px;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.checkout-info {
  text-align: center;
}

.product-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.total {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.checkout-button {
  width: 100%;
  margin-top: 20px;
}
</style>
