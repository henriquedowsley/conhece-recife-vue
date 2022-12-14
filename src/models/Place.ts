import { Category } from './Category'
import { Accessibility } from './Accessibility'

interface Image {
  id: number
  url: string
  isMain: boolean
  placeId: number
}

export interface Place {
  id: number
  name: string
  description: string
  city: string
  street: string
  uf: string
  complement?: string
  district: string
  longitude: number
  latitude: number
  categoryId: number
  category: Category
  images: Image[]
  accessibilities: Accessibility[]
}
