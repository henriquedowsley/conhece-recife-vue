<template>
  <div class="places-slides">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="place in places.list" :key="place.id">
          <div class="place">
            <img :src="place.images.find(({ isMain }) => isMain)?.url" />

            <div class="text">
              <span class="name">{{ place.name }}</span>
              <span class="category">{{ place.category.name }}</span>
            </div>
          </div>
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
    spaceBetween: 20,
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination'
    }
  })
})
</script>

<style scoped lang="scss">
.places-slides {
  overflow: hidden;
  .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 2rem;
    .swiper-slide {
      width: 100%;
      height: 100%;
      &:nth-child(odd) {
        .place .text {
          background-image: linear-gradient(
            to right,
            rgba(#e78500, 0.8),
            rgba(#e78500, 0.8),
            rgba(0, 0, 0, 0)
          );
        }
      }
      &:nth-child(even) {
        .place .text {
          background: linear-gradient(
            89.96deg,
            rgba(5, 0, 255, 0.82) -1.3%,
            rgba(5, 0, 255, 0) 99.97%
          );
        }
      }
      .place {
        border: 2.5px solid var(--primary-color);
        border-radius: 0.5rem;
        overflow: hidden;
        position: relative;
        img {
          display: block;
          width: 100%;
          height: 130px;
          object-fit: cover;
        }
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
.swiper-pagination-bullet {
  background: #000;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: var(--primary-color);
}
</style>
