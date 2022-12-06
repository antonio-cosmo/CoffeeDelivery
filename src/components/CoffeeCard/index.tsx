import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { useState, useRef } from 'react'
import { toast, Id } from 'react-toastify'
import { useCartContext } from '../../context/Cart'
import { ICoffee } from '../../context/Cart/interfaces'
import { priceFormat } from '../../util/priceFormat'
import {
  Card,
  CoffeeImage,
  Description,
  Buy,
  Actions,
  Counter,
  ButtonCart,
} from './styles'

interface ICoffeeCardProps {
  coffee: ICoffee
}

interface ICoffeeCart {
  id: string | null
  count: number
}

export function CoffeeCard({ coffee }: ICoffeeCardProps) {
  const { cart, addProduct, updateProduct } = useCartContext()

  const [coffeeInCart, setCoffeeInCart] = useState<ICoffeeCart>(() => {
    const productInCart = cart.find((value) => value.id === coffee.id)

    if (productInCart) {
      return { id: productInCart.id, count: productInCart.amount }
    }

    return { id: null, count: 0 }
  })
 
  const [inCart, setIncart] = useState(() => {
    return !!coffeeInCart.id
  })


  const toastId = useRef<Id>('')

  const handleAddProduct = async (id: string, amount: number) => {
    if (amount <= 0) {
      toast.info('Insira um produto', { position: 'top-right' })
      return
    }
    const res = await addProduct(id, amount)
    setCoffeeInCart({ id, count: amount})
    setIncart(true)
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast[res.type](res.msg, {
        position: 'top-right',
      })
    }
  }

  const handleIncrementProduct = async () => {
    if (inCart && coffeeInCart.id) {
      const amount = coffeeInCart.count + 1

      setCoffeeInCart((prevState) => {
        return { ...prevState, count: prevState.count + 1 }
      })

      const res = await updateProduct(coffeeInCart.id, amount)
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast[res.type](res.msg, {
          position: 'top-right',
        })
      }
      return
    }
    setCoffeeInCart((prevState) => {
      return { ...prevState, count: prevState.count + 1 }
    })
  }

  const handleDecrementProduct = async () => {
    if (coffeeInCart.count === 0) return

    if (inCart && coffeeInCart.id) {
      const amount = coffeeInCart.count - 1

      if (amount === 0) {
        setIncart(false)
      }

      setCoffeeInCart((prevState) => {
        return { ...prevState, count: prevState.count- 1 }
      })

      const res = await updateProduct(coffeeInCart.id, amount)
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast[res.type](res.msg, {
          position: 'top-right',
        })
      }

      return
    }

    setCoffeeInCart((prevState) => {
      return { ...prevState, count: prevState.count - 1 }
    })
  }
  
  return (
    <Card>
      <CoffeeImage>
        <img src={coffee.imageURL} alt="" />
        <div>
          {coffee.tags.map((tag) => {
            return <span key={tag}>{tag.toUpperCase()}</span>
          })}
        </div>
      </CoffeeImage>
      <Description>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </Description>
      <Buy>
        <p>{priceFormat(coffee.price)}</p>
        <Actions>
          <Counter>
            <button type="button" onClick={() => handleDecrementProduct()}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{coffeeInCart.count}</span>
            <button type="button" onClick={() => handleIncrementProduct()}>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>
          <ButtonCart
            type="button"
            title="Adicionar ao carrinho"
            disabled={inCart}
            onClick={() => handleAddProduct(coffee.id, coffeeInCart.count)}
          >
            <ShoppingCartSimple size={38} weight="fill" />
          </ButtonCart>
        </Actions>
      </Buy>
    </Card>
  )
}
