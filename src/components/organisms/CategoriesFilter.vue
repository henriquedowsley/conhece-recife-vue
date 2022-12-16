<template>
  <div class="categories-filter">
    <Collapse title="Buscar por categoria">
      <div class="categories">
        <FilterButton
          v-for="category in categories.list"
          :key="category.id"
          :text="category.name"
          :icon="category.icon!"
          :active="filters.categoryIds.includes(category.id)"
          @click="updateFilters(category.id)"
        />
      </div>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { Collapse } from '@/components/molecules'
import { FilterButton } from '@/components/atoms'
import { useCategoriesStore } from '@/stores/categories'
import { useFilters } from '@/stores/filters'

const categories = useCategoriesStore()
const filters = useFilters()

function updateFilters(id: number) {
  filters.categoryIds = filters.categoryIds.includes(id)
    ? filters.categoryIds.filter((item) => item !== id)
    : [...filters.categoryIds, id]
}
</script>

<style scoped lang="scss">
.categories-filter {
  .categories {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}
</style>
