import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { useState, useRef } from 'react'
import { toast, Id } from 'react-toastify'
import { useCartContext } from '../../context/Cart'
import { Coffe } from '../../context/Cart/interfaces'
import { priceFormat } from '../../util/priceFormat'
import {
  Card,
  CoffeImage,
  Description,
  Buy,
  Actions,
  Counter,
  ButtonCart,
} from './styles'

interface CoffeCardProps {
  coffe: Coffe
}

interface CoffeCart {
  id: string | null
  count: number
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const { cart, addProduct, updateProduct } = useCartContext()

  const [coffeInCart, setcoffeInCart] = useState<CoffeCart>(() => {
    const productInCart = cart.find((value) => value.id === coffe.id)

    if (productInCart) {
      return { id: productInCart.id, count: productInCart.amount }
    }

    return { id: null, count: 0 }
  })
 
  const [inCart, setIncart] = useState(() => {
    return !!coffeInCart.id
  })


  const toastId = useRef<Id>('')

  const handleAddProduct = async (id: string, amount: number) => {
    if (amount <= 0) {
      toast.info('Insira um produto', { position: 'top-right' })
      return
    }
    const res = await addProduct(id, amount)
    setcoffeInCart({ id, count: amount})
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast[res.type](res.msg, {
        position: 'top-right',
      })
    }
  }

  const handleIncrementProduct = async () => {
    if (inCart && coffeInCart.id) {
      const amount = coffeInCart.count + 1

      setcoffeInCart((prevState) => {
        return { ...prevState, count: prevState.count + 1 }
      })

      const res = await updateProduct(coffeInCart.id, amount)
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast[res.type](res.msg, {
          position: 'top-right',
        })
      }
      return
    }
    setcoffeInCart((prevState) => {
      return { ...prevState, count: prevState.count + 1 }
    })
  }

  const handleDecrementProduct = async () => {
    if (coffeInCart.count === 0) return

    if (inCart && coffeInCart.id) {
      const amount = coffeInCart.count - 1

      if (amount === 0) {
        setIncart(false)
      }

      setcoffeInCart((prevState) => {
        return { ...prevState, count: prevState.count- 1 }
      })

      const res = await updateProduct(coffeInCart.id, amount)
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast[res.type](res.msg, {
          position: 'top-right',
        })
      }

      return
    }

    setcoffeInCart((prevState) => {
      return { ...prevState, count: prevState.count - 1 }
    })
  }
  
  return (
    <Card>
      <CoffeImage>
        <img src={coffe.imageURL} alt="" />
        <div>
          {coffe.tags.map((tag) => {
            return <span key={tag}>{tag.toUpperCase()}</span>
          })}
        </div>
      </CoffeImage>
      <Description>
        <h3>{coffe.name}</h3>
        <p>{coffe.description}</p>
      </Description>
      <Buy>
        <p>{priceFormat(coffe.price)}</p>
        <Actions>
          <Counter>
            <button type="button" onClick={() => handleDecrementProduct()}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{coffeInCart.count}</span>
            <button type="button" onClick={() => handleIncrementProduct()}>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>
          <ButtonCart
            type="button"
            title="Adicionar ao carrinho"
            disabled={inCart}
            onClick={() => handleAddProduct(coffe.id, coffeInCart.count)}
          >
            <ShoppingCartSimple size={38} weight="fill" />
          </ButtonCart>
        </Actions>
      </Buy>
    </Card>
  )
}
