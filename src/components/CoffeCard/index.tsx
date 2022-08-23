import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
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

  // const isInCart = Boolean(cart.find((value) => value.id === coffe.id))

  const handleAddProduct = async (id: string | null, amount: number) => {
    if (amount <= 0) {
      toast.info('Insira um produto', { position: 'top-right' })
      return
    }
    const res = await addProduct(id, amount)
    setCountCoffeCard({ id, count: amount, inCard: true })
    toast[res.type](res.msg, { position: 'top-right' })
  }

  const handleIncrementProduct = async () => {
    if (countCoffeCard.inCard) {
      const amount = countCoffeCard.count + 1

      setCountCoffeCard((prevState) => {
        return { ...prevState, count: prevState.count + 1 }
      })

      const res = await addProduct(countCoffeCard.id, amount)
      toast[res.type](res.msg, { position: 'top-right' })
      return
    }
    setCountCoffeCard((prevState) => {
      return { ...prevState, count: prevState.count + 1 }
    })
  }

  const handleDecrementProduct = async () => {
    if (countCoffeCard.count === 0) return
    if (countCoffeCard.count === 1) {
      toast.info('Remova o item no carrinho', { position: 'top-right' })
      return
    }
    if (countCoffeCard.inCard) {
      const amount = countCoffeCard.count - 1

      setCountCoffeCard((prevState) => {
        return { ...prevState, count: prevState.count - 1 }
      })

      const res = await addProduct(countCoffeCard.id, amount)
      toast[res.type](res.msg, { position: 'top-right' })
      return
    }

    setCountCoffeCard((prevState) => {
      return { ...prevState, count: prevState.count - 1 }
    })
  }
  return (
    <Card>
      {/* <CheckboxContainer>
        <input type="checkbox" readOnly checked={isInCart} />
        <span></span>
      </CheckboxContainer> */}
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
