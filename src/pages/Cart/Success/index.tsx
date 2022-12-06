import {
  Conatainer,
  TextSuccess,
  Header,
  Details,
  Bold,
  TextInfor,
  Text,
} from './styles'
import imgEntregador from '../../../assets/images/Entrega.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useCartContext } from '../../../context/Cart'

export function Success() {
  const { checkoutData } = useCartContext()
  return (
    <Conatainer>
      <TextSuccess>
        <Header>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Header>
        <Details>
          <TextInfor>
            <MapPin size={32} weight="fill" className="mapin" />
            <Text>
              <p>
                Entrega em{' '}
                <Bold>
                  {checkoutData.street}, {checkoutData.houseNum || 'S/N'}
                </Bold>{' '}
              </p>
              <p>
                {checkoutData.district} - {checkoutData.city}, {checkoutData.uf}
              </p>
            </Text>
          </TextInfor>
          <TextInfor>
            <Timer size={32} weight="fill" className="timer" />
            <Text>
              <p>Previsão de entrega</p>
              <p>
                <Bold>20 min - 30 min </Bold>
              </p>
            </Text>
          </TextInfor>
          <TextInfor>
            <CurrencyDollar size={32} weight="fill" className="currency" />

            <Text>
              <p>Pagamento na entrega</p>
              <p>
                <Bold>
                  {checkoutData.pay === 'debito' 
                    ? 'Cartão de Debito' 
                    : checkoutData.pay === 'credito' 
                    ? 'Cartão de Credito' 
                    : 'Dinheiro' }
                </Bold>
              </p>
            </Text>
          </TextInfor>
        </Details>
      </TextSuccess>
      <div>
        <img src={imgEntregador} alt="" />
      </div>
    </Conatainer>
  )
}
