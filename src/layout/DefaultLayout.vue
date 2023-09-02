<template>
  <div class="center-nav">
    <vs-navbar not-line center-collapsed v-model="active" fixed class="custom-navbar">
      <template #left>
        <img src="../assets/logo.png" alt="" height="30" class="logo">
      </template>
      <vs-navbar-item :active="active == 'home'" id="home">
        Home
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'produk'" id="produk">
        Produk
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'keranjang'" id="keranjang">
        Keranjang
      </vs-navbar-item>
      <template #right>
        <vs-button flat class="nav-button">Login</vs-button>
        <vs-button class="nav-button">Get Started</vs-button>
      </template>
    </vs-navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    active: 'guide'
  })
}
</script>

<style scoped>
.custom-navbar {
  height: 60px; /* Ubah tinggi navbar sesuai kebutuhan */
  padding: 0 5%; /* Tambahkan padding di kiri dan kanan */
}

.logo {
  padding-right: 20px; /* Tambahkan padding di sebelah kanan logo */
}

.nav-button {
  padding-left: 20px; /* Tambahkan padding di sebelah kiri tombol kanan */
  padding-right: 20px; /* Tambahkan padding di sebelah kanan tombol kanan */
}


.container {
  padding-top: 60px; /* Pastikan konten di bawah navbar tidak tertutup oleh navbar */
}
</style>


<!--<style scoped>-->
<!--.container .center-nav {-->
<!--  width: 90%;-->
<!--  margin: 0 auto;-->
<!--  padding: 20px;-->
<!--  text-align: justify;-->
<!--  align-content: center;-->
<!--}-->


<!--</style>-->
        