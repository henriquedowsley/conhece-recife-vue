<template>
  <div>
      <Collapse collapseType="accessibility" v-bind:filter-list="fList" >Buscar por acessibilidade</Collapse>
  </div>
</template>

<script setup lang="ts">
  import { Collapse } from '@/components/bosons';
  import { Filter } from '@/models/Filter';
  import { useAccessibilitiesStore } from '@/stores/accessibilities'
  import { onMounted } from 'vue'

  const accessibilities = useAccessibilitiesStore()

  const fList = new Array<Filter>()

  onMounted(async () => {
    await accessibilities.fetchAll()

    for (var acc in accessibilities.list) {
      var filter: Filter = {
        id: accessibilities.list[acc].id,
        name: accessibilities.list[acc].name,
        icon: accessibilities.list[acc].icon
      }

      fList.push(filter)
    }
  })
</script>