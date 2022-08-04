import axios from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import { Coffe } from '../../@types/coffe'
import { Product } from '../../@types/product'

interface CartProviderProps {
  children: ReactNode
}

interface CartContextData {
  cart: Product[]
  addProduct: (id: string, amount: number) => Promise<void>
}
const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  const addProduct = async (id: string, amount: number) => {
    const response = await axios.get(`/api/coffes/${id}`)

    const coffe: Coffe | null = response.data.coffe

    if (coffe) {
      const updateCart = [...cart]
      const productExist = updateCart.find((coffe) => coffe.id === id)

      if (productExist) {
        productExist.amount = amount
        setCart(updateCart)
      } else {
        const coffeProduct: Product = { ...coffe, amount }
        setCart((prevState) => [...cart, coffeProduct])
      }
    }
  }

  console.log(cart)

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}
