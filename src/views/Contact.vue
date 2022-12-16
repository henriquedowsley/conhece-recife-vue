<template>
  <div class="contact">
    <GoBackButton />
    <ContactForm />
  </div>
</template>

<script lang="ts" setup>
import { GoBackButton } from '@/components/atoms'
import { ContactForm } from '@/components/molecules'
</script>

<style scoped lang="scss">
.contact {
  padding: 2rem;
  display: grid;
  gap: 1rem;
}
</style>
