<template>
  <div class="place-list">
    <div
      class="place"
      v-for="place in places.filteredList"
      :key="place.id"
      @click="router.push(`/place/${place.id}`)"
    >
      <img :src="place.images.find(({ isMain }) => isMain)?.url" />

      <div class="text">
        <h5>{{ place.name }}</h5>
        <span>{{ place.category.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlacesStore } from '@/stores/places'
import { useRouter } from 'vue-router'

const places = usePlacesStore()
const router = useRouter()
</script>

<style scoped lang="scss">
.place-list {
  display: grid;
  gap: 1.5rem;
  .place {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 1rem;
    img {
      width: 74px;
      height: 74px;
      border: 1.5px solid var(--primary-color);
      border-radius: 0.75rem;
    }
    .text {
      display: grid;
      grid-auto-rows: max-content;
      align-content: center;
      gap: 0.5rem;
      h5 {
        margin: 0;
      }
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
