import axios from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import { Coffe, Product } from './interfaces'

interface CartProviderProps {
  children: ReactNode
}
interface MsgProps {
  msg: string
  type: 'success' | 'error' | 'info'
}

interface CheckoutData {
  cep: string
  street: string
  houseNum: string
  district: string
  complement: string
  city: string
  uf: string
  pay: string
  products: Product[]
  totalCart: number
}

interface CartContextData {
  cart: Product[]
  checkoutData: CheckoutData
  addProduct: (id: string, amount: number) => Promise<MsgProps>
  updateProduct: (id: string, amount: number) => Promise<MsgProps>
  removeProduct: (id: string) => MsgProps
  createCheckoutData: (data: CheckoutData) => void
  clearCart: () => void
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(()=>{
    const storageCart = localStorage.getItem('cart')
    if(!storageCart) return []
    return JSON.parse(storageCart)
  })
  
  const [checkoutData, setChekoutData] = useState<CheckoutData>(
    {} as CheckoutData,
  )
  
  const setLocalStorage = (key: string, value: any) => {
    const newValue = JSON.stringify(value)
    localStorage.setItem(key, newValue)
  }

  const createCheckoutData = (data: CheckoutData) => {
    setChekoutData(data)
  }
  const addProduct = async (id: string, amount: number) => {
    if (amount === 0) {
      return removeProduct(id)
    }
      const response = await axios.get(`/api/coffes/${id}`)

      const coffe: Coffe | null = response.data.coffe
      if (coffe) {
          const total = coffe.price * amount
          const coffeProduct: Product = { ...coffe, amount, total }
          setCart((prevState) => [...prevState, coffeProduct])
          setLocalStorage('cart', [...cart, coffeProduct])
          const mensange: MsgProps = {
            msg: 'Produto adicionado',
            type: 'success',
          }
          return mensange
        
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
      setLocalStorage('cart', updateCart)
      const mensange: MsgProps = {
        msg: 'Produto removido',
        type: 'success',
      }

      return mensange
    }

    const mensange: MsgProps = {
      msg: 'Erro na remoção do produto',
      type: 'error',
    }

    return mensange
  }

  const updateProduct = async (id: string, amount: number) => {
    if (amount === 0 && id) {
      return removeProduct(id)
    }
    const response = await axios.get(`/api/coffes/${id}`)
    const coffe: Coffe | null = response.data.coffe
    if (coffe) {
      const updateCart = [...cart]
      const productExist = updateCart.find((coffe) => coffe.id === id)
      if (productExist) {

        productExist.amount = amount
        productExist.total = productExist.price * productExist.amount

        setCart(updateCart)
        setLocalStorage('cart', updateCart)
        const mensange: MsgProps = {
          msg: 'Produto atualizado',
          type: 'info',
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
  const clearCart = () => {
    setCart([])
    setLocalStorage('cart',[])
  }


  console.log(cart)
  return (
    <CartContext.Provider
      value={{
        cart,
        checkoutData,
        addProduct,
        removeProduct,
        updateProduct,
        clearCart,
        createCheckoutData,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}
