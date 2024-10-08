<template>
  <div class="columns">
    <div class="column">
      <InitialForm
        ref="loginForm"
        :loading="loadingStore.isLoading"
        @onSubmitForm="handleSubmitForm"
      >
        <template v-slot:formHeader>
          <div class="title is-1">Login to Anime List</div>
        </template>
        <template v-slot:formFooter>
          <button class="button is-primary mr-2" :class="{ 'is-loading': loadingStore.isLoading }">
            Submit
          </button>
          <RouterLink to="signup">
            <button class="button is-secondary">Register</button>
          </RouterLink>
          <FeedbackMessage v-if="hasError" :message="'Error trying to login'" type="danger" />
        </template>
      </InitialForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useLoadingStore } from '@/stores/loading'
import { useAuthStore } from '@/stores/auth'
import InitialForm from '@/components/InitialForm.vue'
import FeedbackMessage from '@/components/FeedbackMessage.vue'

const loadingStore = useLoadingStore()
const authStore = useAuthStore()
const router = useRouter()
const loginForm = ref<InstanceType<typeof InitialForm> | null>(null)
const hasError = ref(false)

import { login } from '@/services/userService'
import { IFormContent } from '@/types'

const handleSubmitForm = async (formValues: IFormContent) => {
  try {
    loadingStore.startLoading()
    await login(formValues)
    authStore.login()
    router.push('/home')
  } catch (e) {
    hasError.value = true
  } finally {
    loadingStore.stopLoading()
    loginForm.value?.resetForm()
  }
}
</script>

<style scoped></style>
