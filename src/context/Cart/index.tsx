import axios from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import { ICoffee, IProduct } from './interfaces'

interface ICartProviderProps {
  children: ReactNode
}
interface IMsgProps {
  msg: string
  type: 'success' | 'error' | 'info'
}

interface ICheckoutData {
  cep: string
  street: string
  houseNum: string
  district: string
  complement: string
  city: string
  uf: string
  pay: string
  products: IProduct[]
  totalCart: number
}

interface ICartContextData {
  cart: IProduct[]
  checkoutData: ICheckoutData
  addProduct: (id: string, amount: number) => Promise<IMsgProps>
  updateProduct: (id: string, amount: number) => Promise<IMsgProps>
  removeProduct: (id: string) => IMsgProps
  createCheckoutData: (data: ICheckoutData) => void
  clearCart: () => void
}

const CartContext = createContext({} as ICartContextData)

export function CartProvider({ children }: ICartProviderProps) {
  const [cart, setCart] = useState<IProduct[]>(()=>{
    const storageCart = localStorage.getItem('cart')
    if(!storageCart) return []
    return JSON.parse(storageCart)
  })
  
  const [checkoutData, setChekoutData] = useState<ICheckoutData>(
    {} as ICheckoutData,
  )
  
  const setLocalStorage = (key: string, value: any) => {
    const newValue = JSON.stringify(value)
    localStorage.setItem(key, newValue)
  }

  const createCheckoutData = (data: ICheckoutData) => {
    setChekoutData(data)
  }
  const addProduct = async (id: string, amount: number) => {
    if (amount === 0) {
      return removeProduct(id)
    }
      const response = await axios.get(`/api/coffees/${id}`)

      const coffee: ICoffee | null = response.data.coffee
      if (coffee) {
          const total = coffee.price * amount
          const coffeeProduct: IProduct = { ...coffee, amount, total }
          setCart((prevState) => [...prevState, coffeeProduct])
          setLocalStorage('cart', [...cart, coffeeProduct])
          const mensange: IMsgProps = {
            msg: 'Produto adicionado',
            type: 'success',
          }
          return mensange
        
      }
    

    const mensange: IMsgProps = {
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
      const mensange: IMsgProps = {
        msg: 'Produto removido',
        type: 'success',
      }

      return mensange
    }

    const mensange: IMsgProps = {
      msg: 'Erro na remoção do produto',
      type: 'error',
    }

    return mensange
  }

  const updateProduct = async (id: string, amount: number) => {
    if (amount === 0 && id) {
      return removeProduct(id)
    }
    const response = await axios.get(`/api/coffees/${id}`)
    const coffee: ICoffee | null = response.data.coffee
    if (coffee) {
      const updateCart = [...cart]
      const productExist = updateCart.find((coffee) => coffee.id === id)
      if (productExist) {

        productExist.amount = amount
        productExist.total = productExist.price * productExist.amount

        setCart(updateCart)
        setLocalStorage('cart', updateCart)
        const mensange: IMsgProps = {
          msg: 'Produto atualizado',
          type: 'info',
        }

        return mensange
      }
    }

    const mensange: IMsgProps = {
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
