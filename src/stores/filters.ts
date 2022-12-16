import { defineStore } from 'pinia'

interface Operation {
  id: number
  from: 'categories' | 'accessibilities'
}

export const useFilters = defineStore('filters', {
  state: () => ({
    categoryIds: [] as number[],
    accessibilityIds: [] as number[]
  }),
  actions: {
    add({ id, from }: Operation) {
      if (from === 'categories') {
        this.categoryIds.push(id)
      } else {
        this.accessibilityIds.push(id)
      }
    },
    remove({ id, from }: Operation) {
      if (from === 'categories') {
        this.categoryIds = this.categoryIds.filter((item) => item !== id)
      } else {
        this.accessibilityIds = this.categoryIds.filter((item) => item !== id)
      }
    }
  }
})
