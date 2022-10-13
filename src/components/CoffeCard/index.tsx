import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { useState, useRef } from 'react'
import { toast, Id } from 'react-toastify'
import { Coffe } from '../../@types/coffe'
import { useCartContext } from '../../context/Cart'
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

interface CoffeCount {
  id: string | null
  count: number
  inCard: boolean
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const { cart, addProduct } = useCartContext()
  const [countCoffeCard, setCountCoffeCard] = useState<CoffeCount>(() => {
    const coffeCart = cart.find((value) => value.id === coffe.id)

    if (coffeCart) {
      return { id: coffeCart.id, count: coffeCart.amount, inCard: true }
    }

    return { id: null, count: 0, inCard: false }
  })

  const toastId = useRef<Id>('')

  const handleAddProduct = async (id: string | null, amount: number) => {
    if (amount <= 0) {
      toast.info('Insira um produto', { position: 'top-right' })
      return
    }
    const res = await addProduct(id, amount)
    setCountCoffeCard({ id, count: amount, inCard: true })
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast[res.type](res.msg, {
        position: 'top-right',
      })
    }
  }

  const handleIncrementProduct = async () => {
    if (countCoffeCard.inCard) {
      const amount = countCoffeCard.count + 1

      setCountCoffeCard((prevState) => {
        return { ...prevState, count: prevState.count + 1 }
      })

      const res = await addProduct(countCoffeCard.id, amount)
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast[res.type](res.msg, {
          position: 'top-right',
        })
      }
      return
    }
    setCountCoffeCard((prevState) => {
      return { ...prevState, count: prevState.count + 1 }
    })
  }

  const handleDecrementProduct = async () => {
    if (countCoffeCard.count === 0) return

    if (countCoffeCard.inCard) {
      const amount = countCoffeCard.count - 1

      if (amount === 0) {
        countCoffeCard.inCard = false
      }

      setCountCoffeCard((prevState) => {
        return { ...prevState, count: prevState.count - 1 }
      })

      const res = await addProduct(countCoffeCard.id, amount)
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast[res.type](res.msg, {
          position: 'top-right',
        })
      }

      return
    }

    setCountCoffeCard((prevState) => {
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
            <span>{countCoffeCard.count}</span>
            <button type="button" onClick={() => handleIncrementProduct()}>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>
          <ButtonCart
            type="button"
            title="Adicionar ao carrinho"
            disabled={countCoffeCard.inCard}
            onClick={() => handleAddProduct(coffe.id, countCoffeCard.count)}
          >
            <ShoppingCartSimple size={38} weight="fill" />
          </ButtonCart>
        </Actions>
      </Buy>
    </Card>
  )
}
