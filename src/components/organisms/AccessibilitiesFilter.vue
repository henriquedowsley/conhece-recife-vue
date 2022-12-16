<template>
  <div class="accessibilities-filter">
    <Collapse title="Buscar por acessibilidade">
      <div class="accessibilities">
        <FilterButton
          v-for="accessibility in accessibilities.list"
          :key="accessibility.id"
          :text="accessibility.name"
          :icon="accessibility.icon!"
          :active="filters.accessibilityIds.includes(accessibility.id)"
          @click="updateFilters(accessibility.id)"
        />
      </div>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { Collapse } from '@/components/molecules'
import { FilterButton } from '@/components/atoms'
import { useAccessibilitiesStore } from '@/stores/accessibilities'
import { useFilters } from '@/stores/filters'

const accessibilities = useAccessibilitiesStore()
const filters = useFilters()

function updateFilters(id: number) {
  filters.accessibilityIds = filters.accessibilityIds.includes(id)
    ? filters.accessibilityIds.filter((item) => item !== id)
    : [...filters.accessibilityIds, id]
}

</script>

<style scoped lang="scss">
.accessibilities-filter {
  .accessibilities {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
</style>
