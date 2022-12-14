import axios, { AxiosInstance } from 'axios'

export const request: AxiosInstance = axios.create({
  baseURL: 'https://conhece-recife-adonis-pbltb.ondigitalocean.app'
})
