import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react'
import { Coffe } from '../../pages/Home'
import { Card, CoffeImage, Description, Buy, Actions, Counter } from './styles'

interface CoffeCardProps {
  coffe: Coffe
}
export function CoffeCard({ coffe }: CoffeCardProps) {
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
        <p>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(coffe.price)}
        </p>
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
    </Card>
  )
}
