import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import {
  HomeContainer,
  Banner,
  Text,
  ImageCoffe,
  Beneficios,
  ListCoffe,
} from './styles'
import coffeImg from '../../assets/images/Coffe.svg'
import { CoffeCard } from '../../components/CoffeCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

export interface Coffe {
  id: string
  imageURL: string
  tags: string[]
  name: string
  description: string
  price: number
}
export function Home() {
  const [coffes, setCoffes] = useState<Coffe[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await axios.get('/api/coffes/')
      const { coffes } = res.data
      setCoffes(coffes)
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
          <img src={coffeImg} alt="" />
        </ImageCoffe>
      </Banner>

      <ListCoffe>
        <h2>Nossos cafés</h2>
        <ul>
          {coffes.map((coffe) => {
            return <CoffeCard key={coffe.id} coffe={coffe} />
          })}
        </ul>
      </ListCoffe>
    </HomeContainer>
  )
}
