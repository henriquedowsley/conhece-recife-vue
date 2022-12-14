import { defineStore } from 'pinia'
import { request } from '@/utils/request'

interface SendContactPayload {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export const useContactStore = defineStore('contact', {
  actions: {
    async send(payload: SendContactPayload) {
      await request.post('/contact', payload)
    }
  }
})
