<template>
  <div class="container">
    <div class="checkout">
      <CheckoutView/>
    </div>
  </div>

</template>
<script setup>
import CheckoutFurniture from "@/components/Checkout.vue";

export default {
  name: 'CheckoutView',
  components: {CheckoutFurniture},
}
</script>