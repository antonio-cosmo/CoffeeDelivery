export interface ICoffee {
    id: string
    imageURL: string
    tags: string[]
    name: string
    description: string
    price: number
    total: number
}


export interface IProduct extends ICoffee {
  amount: number
}