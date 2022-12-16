<template>
  <div class="place">
    <GoBackButton />

    <PlaceSlide />

    <div class="content">
      <PlaceTitle />

      <div class="accessibility">
        <span>
          {{
            places.current.accessibilities.length
              ? 'Acessível para:'
              : 'Sem acessibilidade'
          }}
        </span>
        <img
          v-for="accessibility in places.current.accessibilities"
          :key="accessibility.id"
          :src="accessibility.icon"
        />
      </div>

      <div class="description">
        {{ places.current.description }}
      </div>

      <div class="images">
        <img
          v-for="image in places.current.images.filter(({ isMain }) => !isMain)"
          :src="image.url"
          :key="image.id"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePlacesStore } from '@/stores/places'
import { GoBackButton } from '@/components/atoms'
import { PlaceSlide, PlaceTitle } from '@/components/molecules'
import { useRoute } from 'vue-router'

const places = usePlacesStore()
const route = useRoute()

places.setCurrent({ id: Number(route.params.id) })
</script>

<style scoped lang="scss">
.place {
  padding: 1rem;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-auto-rows: max-content;
  .place-slide {
    margin: 0 -1rem;
  }
  .content {
    display: grid;
    gap: 0.5rem;
    padding-bottom: 3rem;
    .place-title {
      margin-bottom: -0.5rem;
    }
    .accessibility {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 0.5rem;
      align-items: center;
      span {
        font-weight: bold;
      }
      img {
        width: 23px;
      }
    }
    .description {
      font-size: 14px;
      font-weight: 300;
      line-height: 1.5;
    }
    .images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      img {
        border: 2px solid var(--primary-color);
        border-radius: 0.75rem;
        height: 140px;
        width: 100%;
      }
    }
  }
}
</style>
