<template>
  <div class="places-list">
    <div class="place" v-for="place in places.list" :key="place.id">
      <div>
        <img :src="place.images.find(({ isMain }) => isMain)?.url" />
      </div>

      <div class="text">
        <b class="name">{{ place.name }}</b>
        <br>
        <span class="category">{{ place.category.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlacesStore } from '@/stores/places'
import { onMounted } from 'vue'

const places = usePlacesStore()

</script>

<style scoped lang="scss">
.places-list  {
  .place  {
    img {
      display: block;
      width: 100%;
      height: 130px;
      object-fit: cover;
      border: 2.5px solid var(--primary-color);
      border-radius: 0.5rem;
      overflow: hidden;
      position: relative;
    }
  }
}
.places-list {
  overflow: hidden;
  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 2rem;
    .swiper-slide {
      width: 100%;
      height: 100%;
      .place {
        border: 2.5px solid var(--primary-color);
        border-radius: 0.5rem;
        overflow: hidden;
        position: relative;
        .text {
          position: absolute;
          bottom: 10px;
          color: #fff;
          display: grid;
          gap: 0.3rem;
          padding: 0.5rem;
          .name {
            font-size: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .category {
            font-size: 14px;
          }
        }
      }
    }
    .swiper-pagination {
      bottom: 30px;
    }
  }
}
</style>

<style>
/* .swiper-pagination-bullet {
  background: #000;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: var(--primary-color);
} */
</style>
