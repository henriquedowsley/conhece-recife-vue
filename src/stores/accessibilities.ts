import { defineStore } from 'pinia'
import { request } from '@/utils/request'
import { Accessibility } from '@/models/Accessibility'

export const useAccessibilitiesStore = defineStore('accessibility', {
  state: () => ({
    list: [] as Accessibility[]
  }),
  actions: {
    async fetchAll() {
      const { data } = await request.get('/accessibilities')

      this.list = data
    }
  }
})
