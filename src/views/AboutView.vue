<template>
  <div class="container">
    <vs-row>
      <vs-col :key="index" v-for="col,index in 3" vs-type="flex" vs-justify="center" vs-align="center" w="4">
        <vs-card>
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80" alt="">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
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
  </div>
</template>
<script setup>
</script>

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  text-align: justify;
  align-content: center;
}

</style>