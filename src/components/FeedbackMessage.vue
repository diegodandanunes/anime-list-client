<template>
  <div class="mt-5">
    <article class="message" :class="'is-' + type">
      <div class="message-body">
        {{ message }}
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: 'danger' | 'success'
  message: string
}>()
</script>

<style scoped></style>
