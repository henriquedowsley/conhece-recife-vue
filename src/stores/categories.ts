import { defineStore } from 'pinia'
import { request } from '@/utils/request'
import { Category } from '@/models/Category'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    list: [] as Category[]
  }),
  actions: {
    async fetchAll() {
      const { data } = await request.get('/categories')

      this.list = data
    }
  }
})
