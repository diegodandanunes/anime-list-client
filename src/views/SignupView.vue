<template>
  <div class="columns">
    <div class="column">
      <InitialForm :loading="loading" @onSubmitForm="handleSubmitForm">
        <template v-slot:formHeader>
          <div class="title is-1">signup</div>
        </template>
        <template v-slot:formFooter>
          <button class="button is-primary mr-2">Submit</button>
          <RouterLink to="signup">
            <button class="button is-secondary">Register</button>
          </RouterLink>
        </template>
      </InitialForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import InitialForm from '@/components/InitialForm.vue'

const loading = ref(false)

import { login } from '@/services/userService'
import { IFormContent } from '@/types'

const handleSubmitForm = async (formValues: IFormContent) => {
  try {
    loading.value = true
    await login(formValues)
  } catch (e) {
    console.log('não rolou')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
