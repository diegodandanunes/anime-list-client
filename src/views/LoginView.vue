<template>
  <div class="is-flex is-align-items-center is-justify-content-center login__wrapper">
    <form @submit.prevent="handleSubmit">
      <input class="input mb-4" type="text" placeholder="User name" v-model="form.username" />
      <input class="input mb-4" type="password" placeholder="Text password" v-model="form.email" />

      <button class="button is-primary">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const submitted = ref(false)

const form = reactive({
  username: '',
  email: ''
})

const handleSubmit = () => {
  console.log('Form submitted with:', form)
  form.email = ''
  form.username = ''
  submitted.value = true
}
</script>

<style scoped>
.login__wrapper {
  height: 100vh;
}
</style>
