<template>
  <div class="container">
    <header>
      <div class="header-content">
        <div class="header-text">
          <h1>Selamat Datang di rvfurniture</h1>
          <p>Tempat untuk mencari furniture yang kekinian dan minimalist, untuk mendapatkan info produk terbaru bisa subscribe di bawah ini</p>
          <div class="input-button-container">
            <vs-input v-model="value" placeholder="Email" />
            <vs-button
                :active="active == 0"
                @click="active = 0"
            >
              <i class="bx bx-home-alt"></i> Subscribe
            </vs-button>
          </div>
        </div>
        <div class="header-image">
          <img src="../assets/milimalist.png" alt="Deskripsi Gambar">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderFurniture',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    submitForm() {
      // Fungsi yang akan dijalankan saat tombol diklik
      // Anda dapat menambahkan logika yang sesuai di sini
      console.log('Form Submitted');
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px; /* Ruang padding di dalam header */
}

.header-content {
  display: grid; /* Menggunakan CSS Grid untuk mengatur layout */
  grid-template-columns: 1fr 1fr; /* Memiliki dua kolom dengan lebar yang sama */
  align-items: center; /* Mengatur vertikal alignment ke tengah */
  gap: 20px; /* Spasi antara elemen-elemen */
}

.header-text {
  text-align: left; /* Teks rata kiri */
}

.input-button-container {
  display: flex;
  align-items: center;
}

.header-image img {
  max-width: 100%; /* Agar gambar tidak melebihi lebar header */
  height: auto; /* Agar gambar tetap proporsional */
}
</style>
