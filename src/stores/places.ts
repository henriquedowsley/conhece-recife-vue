import { defineStore } from 'pinia'
import { request } from '@/utils/request'
import { Place } from '@/models/Place'

export const usePlacesStore = defineStore('places', {
  state: () => ({
    list: [] as Place[]
  }),
  actions: {
    async fetchAll() {
      const { data } = await request.get('/places')

      this.list = data

      console.log(data)
    }
  }
})
