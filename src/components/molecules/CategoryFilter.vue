<template>
  <div>
    <Collapse collapseType="category" v-bind:filter-list="fList">
      Buscar por categoria
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { Collapse } from '@/components/bosons'
import { Filter } from '@/models/Filter'
import { useCategoriesStore } from '@/stores/categories'
import { onMounted } from 'vue'

const categories = useCategoriesStore()

const fList = new Array<Filter>()

onMounted(async () => {
  await categories.fetchAll()

  for (var cat in categories.list) {
    var filter: Filter = {
      id: categories.list[cat].id,
      name: categories.list[cat].name,
      icon: categories.list[cat].icon
    }

    fList.push(filter)
  }
})
</script>
