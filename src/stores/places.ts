import { defineStore } from 'pinia'
import { request } from '@/utils/request'
import { Place } from '@/models/Place'
import { useFilters } from '@/stores/filters'

export const usePlacesStore = defineStore('places', {
  state: () => ({
    list: [] as Place[],
    current: {} as Place
  }),
  getters: {
    filteredList(state) {
      const filters = useFilters()
      let filteredList: Place[] = state.list

      if (!filters.categoryIds.length && !filters.accessibilityIds.length) {
        return filteredList
      }

      if (filters.categoryIds.length) {
        filteredList = filteredList.filter((place) => {
          return filters.categoryIds.includes(place.categoryId)
        })
      }

      if (filters.accessibilityIds.length) {
        filteredList = filteredList.filter((place) => {
          return place.accessibilities.some(({ id }) =>
            filters.accessibilityIds.includes(id)
          )
        })
      }

      return filteredList
    }
  },
  actions: {
    async fetchAll() {
      const { data } = await request.get('/places')

      this.list = data
    },
    async setCurrent({ id }: { id: number }) {
      this.current = this.list.find((place) => place.id === id)!
    }
  }
})
