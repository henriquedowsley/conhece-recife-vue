<template>
  <div class="go-back-button" @click="goBack">
    <img src="@/assets/images/back-arrow.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => router.back()
</script>
