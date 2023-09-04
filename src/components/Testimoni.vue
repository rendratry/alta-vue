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
          name: 'Dika Kurniawan',
          comment: 'Furnitur minimalis ini sangat elegan dan fungsional. Desainnya yang sederhana tetapi menarik memberikan sentuhan modern yang sempurna untuk ruang tamu saya. Saya sangat puas dengan kualitasnya.',
          avatar: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=2000'
        },
        {
          id: 2,
          name: 'Asep Subarjo',
          comment: 'Produk furnitur minimalis ini memenuhi semua ekspektasi saya. Bahan berkualitas tinggi dan perpaduan warna yang cocok dengan gaya dekorasi rumah saya. Harganya juga cukup terjangkau untuk kualitas yang diberikan.',
          avatar: 'https://media.istockphoto.com/id/951334392/fr/photo/portrait-de-sourire-beau-m%C3%A2le-ouvrier-garde-main-sous-le-menton-porte-casual-t-shirt-blanc-et.jpg?s=170667a&w=0&k=20&c=o-WlvtUIY-U3MObubu9aQNpyUk0Ifsu_DByiKCn1jxE='
        },
        {
          id: 3,
          name: 'Ilham Sutikno',
          comment: 'Furnitur minimalis ini memberikan kesan bersih dan lapang dalam ruangan saya. Desainnya yang ringkas membantu mengoptimalkan ruang, sementara tampilannya yang bersih membuatnya mudah untuk dipadukan dengan berbagai dekorasi. Sangat merekomendasikannya!',
          avatar: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg'
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
