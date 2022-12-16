<template>
  <div class="place-slide">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="image in places.current.images" :key="image.id">
          <img :src="image.url" />
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlacesStore } from '@/stores/places'
import { onMounted } from 'vue'
import Swiper, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const places = usePlacesStore()

onMounted(() => {
  new Swiper('.mySwiper', {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination'
    }
  })
})
</script>

<style scoped lang="scss">
.place-slide {
  overflow: hidden;
  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 2rem;
    .swiper-slide {
      width: 100%;
      height: 100%;
      img {
        display: block;
        width: 100%;
        height: 230px;
        object-fit: cover;
      }
    }
    .swiper-pagination {
      bottom: 30px;
    }
  }
}
</style>

<style>
.swiper-pagination-bullet {
  background: #000;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: var(--primary-color);
}
</style>
