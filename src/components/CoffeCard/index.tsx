import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { Coffe, CoffeImage, Description, Buy, Actions, Counter } from './styles'
import expresso from '../../assets/images/Expresso.svg'
export function CoffeCard() {
  return (
    <Coffe>
      <CoffeImage>
        <img src={expresso} alt="" />
        <p>
          <span>Tradicional</span>
        </p>
      </CoffeImage>
      <Description>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional cafe feito com agua quente e graos moidos</p>
      </Description>
      <Buy>
        <p>R$ 9,90</p>
        <Actions>
          <Counter>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>
          <ShoppingCartSimple size={38} weight="fill" />
        </Actions>
      </Buy>
    </Coffe>
  )
}
