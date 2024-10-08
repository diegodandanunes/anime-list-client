<template>
  <div
    class="is-flex is-align-items-left is-justify-content-center login__wrapper is-flex-direction-column"
  >
    <slot name="formHeader"></slot>
    <form @submit.prevent="handleSubmit">
      <input
        class="input mb-4"
        :disabled="loading"
        type="text"
        placeholder="Email"
        v-model="form.email"
      />
      <input
        class="input mb-4"
        :disabled="loading"
        type="password"
        placeholder="Password"
        v-model="form.password"
      />
      <slot name="formFooter"></slot>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose } from 'vue'

const props = defineProps<{
  loading: boolean
}>()

const emits = defineEmits(['onSubmitForm'])

const form = reactive({
  email: '',
  password: ''
})

const resetForm = () => {
  form.email = ''
  form.password = ''
}

defineExpose({ resetForm })

const handleSubmit = () => {
  emits('onSubmitForm', form)
}
</script>

<style scoped>
.login__wrapper {
  height: 100vh;
  max-width: 50vw;
  margin: auto;
}
</style>
