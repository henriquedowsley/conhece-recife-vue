<template>
  <div class="collapse">
    <b>
      <slot />
    </b>

    <button v-bind:id="collapseType+'_btn-arrow-up'" class="btn-arrow" @click="collapse(true)">
      <font-awesome-icon icon="fa-solid fa-angle-up" />
    </button>

    <button v-bind:id="collapseType+'_btn-arrow-down'" class="btn-arrow" @click="collapse(false)">
      <font-awesome-icon icon="fa-solid fa-angle-down"/>
    </button>
      <div v-bind:id="collapseType+'_filterDiv'">
        <div  v-for="filter in filterList" :key="filter.id">
          <div class="filter">
            
            <!-- <img :src="place.images.find(({ isMain }) => isMain)?.url" /> -->

            <div class="text">
              <span class="name">{{ filter.name }}</span>
              <span class="category">{{ filter.icon }}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { Filter } from '@/models/Filter'
  import { defineProps } from 'vue'

  interface Props {
    collapseType: string,
    filterList: Filter[]
  }

  const props = defineProps<Props>()
  
  onMounted(async () => {
    collapse(false);
  })

  function collapse(aberto: boolean) {  
    var x = document.getElementById(props.collapseType + "_filterDiv");
    var y = document.getElementById(props.collapseType + "_btn-arrow-up");
    var z = document.getElementById(props.collapseType + "_btn-arrow-down");

    if (!((x === null)||(y === null)||(z === null))) {
      if (aberto) {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
      } else {
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
      }
    } else {
    console.log("Algo de errado não está certo.")
    }
  } 
</script>

<style scoped lang="scss">
  .collapse {
    .btn-arrow {
      background: none;
      border: none;
      float: right;
    }
  }
</style>
