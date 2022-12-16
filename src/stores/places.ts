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
    }
    ,
    async filter(categories: Array<number>, accessibilities: Array<number>) {
      console.log(this.list)

      this.list = this.list.filter(p => (categories.some(c => c === p.categoryId) === true) 
      // && p.accessibilities.forEach(function(pa) {return (accessibilities.some(a => a === pa.id) === true)})
      )
      console.log(this.list)
    }
  }
})
