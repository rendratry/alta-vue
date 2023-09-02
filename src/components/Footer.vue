<template>
  <div>
    <!-- Isi konten halaman Anda di sini -->

    <!-- Footer -->
    <vs-footer>
      <div class="footer-content">
        <div>
          <h3>Company Name</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
      </div>
    </vs-footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.footer-content h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-content p {
  font-size: 14px;
}

.footer-content ul {
  list-style: none;
  padding: 0;
}

.footer-content ul li {
  margin-bottom: 5px;
}

.footer-content ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
