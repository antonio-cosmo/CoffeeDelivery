import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import {
  HomeContainer,
  Banner,
  Text,
  ImageCoffe,
  Beneficios,
  ListCoffe,
} from './styles'
import coffeeImg from '../../assets/images/Coffe.svg'
import { CoffeeCard } from '../../components/CoffeeCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ICoffee } from '../../context/Cart/interfaces'

export function Home() {
  const [coffees, setCoffees] = useState<ICoffee[]>([])
  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/coffees/')
      const { coffees } = res.data
      setCoffees(coffees)
    })()
  }, [])

  return (
    <HomeContainer>
      <Banner>
        <Text>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery voce recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Beneficios>
            <div className="column-1">
              <p>
                <ShoppingCart size={32} weight="fill" />
                <span>Compra simples e segura</span>
              </p>
              <p>
                <Timer size={32} weight="fill" />
                <span>Entrega rápida e rastreada</span>
              </p>
            </div>
            <div className="column-2">
              <p>
                <Package size={32} weight="fill" />
                <span>Embalagem mantém o café intacto</span>
              </p>

              <p>
                <Coffee size={32} weight="fill" />
                <span>O café chega fresquinho até você</span>
              </p>
            </div>
          </Beneficios>
        </Text>
        <ImageCoffe>
          <img src={coffeeImg} alt="" />
        </ImageCoffe>
      </Banner>

      <ListCoffe>
        <h2>Nossos cafés</h2>
        <ul>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </ul>
      </ListCoffe>
    </HomeContainer>
  )
}
