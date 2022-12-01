export interface Coffe {
    id: string
    imageURL: string
    tags: string[]
    name: string
    description: string
    price: number
    total: number
}


export interface Product extends Coffe {
  amount: number
}