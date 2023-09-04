<template>
  <!-- Komponen lain di atas -->

  <!-- Bagian Testimoni -->
  <section class="testimonials">
    <div class="container">
      <h2>Testimoni Pelanggan</h2>
      <br>
      <vs-row :vs-gutter="16"  class="card">
        <vs-col v-for="testimonial in testimonials" :key="testimonial.id" :w="{ default: 4, sm: 6 }">
          <vs-card>
            <template #text>
              <p>{{ testimonial.comment }}</p>
            </template>
            <template #img>
              <img :src="testimonial.avatar" alt="Avatar">
            </template>
            <template #title>
              <h3>{{ testimonial.name }}</h3>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
  </section>
  <!-- Komponen lain di bawah -->

</template>

<script>
export default {
  name: 'TestimoniView',
  // Komponen lainnya
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: 'John Doe',
          comment: 'Pelayanan sangat baik! Produk berkualitas tinggi.',
          avatar: 'https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg'
        },
        {
          id: 2,
          name: 'Jane Smith',
          comment: 'Saya sangat puas dengan pembelian saya. Terima kasih!',
          avatar: 'https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg'
        },
        {
          id: 3,
          name: 'Jane Smith',
          comment: 'Saya sangat puas dengan pembelian saya. Terima kasih!',
          avatar: 'https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg'
        },
        // Tambahkan testimoni lainnya di sini
      ]
    };
  }
};
</script>

<style scoped>
/* Gaya CSS khusus untuk bagian testimoni jika diperlukan */
.testimonials {
  padding: 40px 0;
}

.testimonials h2 {
  text-align: center;
}

.testimonials vs-card {
  margin: 10px;
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
</style>
