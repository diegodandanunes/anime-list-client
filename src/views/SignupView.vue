<template>
  <div class="columns">
    <div class="column">
      <InitialForm
        ref="signupForm"
        :loading="loadingStore.isLoading"
        @onSubmitForm="handleSubmitForm"
      >
        <template v-slot:formHeader>
          <div class="title is-1">Register to Anime List</div>
        </template>
        <template v-slot:formFooter>
          <button class="button is-primary mr-2" :class="{ 'is-loading': loadingStore.isLoading }">
            Register
          </button>
          <RouterLink to="/">
            <button class="button is-secondary">Back</button>
          </RouterLink>
          <FeedbackMessage v-if="hasError" :message="'Error trying to register'" type="danger" />
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

import { signup } from '@/services/userService'
import { IFormContent } from '@/types'

const loadingStore = useLoadingStore()
const authStore = useAuthStore()
const router = useRouter()
const signupForm = ref<InstanceType<typeof InitialForm> | null>(null)
const hasError = ref(false)

const handleSubmitForm = async (formValues: IFormContent) => {
  try {
    loadingStore.startLoading()
    await signup(formValues)
    authStore.login()
    router.push('/')
  } catch (e) {
    hasError.value = true
  } finally {
    loadingStore.stopLoading()
    signupForm.value?.resetForm()
  }
}
</script>

<style scoped></style>
