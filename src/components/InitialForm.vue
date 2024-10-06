<template>
  <div
    class="is-flex is-align-items-left is-justify-content-center login__wrapper is-flex-direction-column"
  >
    <slot name="formHeader"></slot>
    <form @submit.prevent="handleSubmit">
      <input class="input mb-4" type="text" placeholder="Email" v-model="form.email" />
      <input class="input mb-4" type="password" placeholder="Password" v-model="form.password" />

      <button class="button is-primary" :class="{ 'is-loading': props.loading }">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const emits = defineEmits(['onSubmitForm'])

const props = defineProps<{
  loading: boolean
}>()

const form = reactive({
  email: '',
  password: ''
})

const resetForm = () => {
  form.email = ''
  form.password = ''
}

const handleSubmit = () => {
  emits('onSubmitForm', form)
  resetForm()
}
</script>

<style scoped>
.login__wrapper {
  height: 100vh;
  max-width: 50vw;
  margin: auto;
}
</style>
