import axios from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Coffe } from '../../@types/coffe'
import { Product } from '../../@types/product'

interface CartProviderProps {
  children: ReactNode
}
interface MsgProps {
  msg: string
  type: 'success' | 'error' | 'info'
}
interface CartContextData {
  cart: Product[]
  addProduct: (id: string, amount: number) => Promise<MsgProps>
  removeProduct: (id: string) => MsgProps
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
        const mensange: MsgProps = { msg: 'Produto atualizado', type: 'info' }

        return mensange
      } else {
        const coffeProduct: Product = { ...coffe, amount }
        setCart((prevState) => [...cart, coffeProduct])
        const mensange: MsgProps = {
          msg: 'Produto adicionado',
          type: 'success',
        }
        return mensange
      }
    }
    const mensange: MsgProps = {
      msg: 'Produto não foi adicionado',
      type: 'error',
    }
    return mensange
  }

  const removeProduct = (id: string) => {
    const updateCart = [...cart]
    const indexForDel = updateCart.findIndex((value) => value.id === id)

    if (indexForDel > -1) {
      updateCart.splice(indexForDel, 1)
      setCart(updateCart)
      const mensange: MsgProps = { msg: 'Produto removido', type: 'success' }

      return mensange
    } else {
      toast.error('', { position: 'top-right' })
    }
    const mensange: MsgProps = {
      msg: 'Erro na remoção do produto',
      type: 'error',
    }

    return mensange
  }
  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}
