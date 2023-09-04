<template>
  <div class="center-nav">
    <vs-navbar not-line center-collapsed v-model="active" fixed class="custom-navbar">
      <template #left>
        <img src="../assets/logorv-biru.png" alt="" height="30" class="logo">
      </template>
      <vs-navbar-item :active="active === 'home'" id="home" to="/">
        Home
      </vs-navbar-item>
      <vs-navbar-item :active="active === 'produk'" id="produk" to="/produk">
        Produk
      </vs-navbar-item>
      <template #right>
        <vs-button class="nav-button" @click="showLoginDialog = true" to="/login">Login</vs-button>
      </template>
    </vs-navbar>
    <div class="container">
      <login-dialog v-if="showLoginDialog" @close="showLoginDialog = false"></login-dialog>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LoginDialog from "@/components/LoginDialog.vue";

export default {
  name: 'DefaultLayout',
  components: {LoginDialog},
  data: () => ({
    active: 'home',
    showLoginDialog: false,
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


        