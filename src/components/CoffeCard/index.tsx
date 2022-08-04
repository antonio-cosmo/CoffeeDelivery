import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
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
  CheckboxContainer,
} from './styles'

interface CoffeCardProps {
  coffe: Coffe
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const { cart, addProduct } = useCartContext()
  const [count, setCount] = useState(() => {
    const coffeCart = cart.find((value) => value.id === coffe.id)

    if (coffeCart) {
      return coffeCart.amount
    }

    return 1
  })

  const isInCart = Boolean(cart.find((value) => value.id === coffe.id))

  const handleAddProduct = (id: string, amount: number) => {
    addProduct(id, amount)
  }

  const handleIncrementProduct = () => {
    setCount((prevState) => prevState + 1)
  }

  const handleDecrementProduct = () => {
    if (count <= 1) return

    setCount((prevState) => prevState - 1)
  }
  return (
    <Card>
      <CheckboxContainer>
        <input type="checkbox" readOnly checked={isInCart} />
        <span></span>
      </CheckboxContainer>
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
            <span>{count}</span>
            <button type="button" onClick={() => handleIncrementProduct()}>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>
          <ButtonCart
            type="button"
            title="Adicionar ao carrinho"
            onClick={() => handleAddProduct(coffe.id, count)}
          >
            <ShoppingCartSimple size={38} weight="fill" />
          </ButtonCart>
        </Actions>
      </Buy>
    </Card>
  )
}
