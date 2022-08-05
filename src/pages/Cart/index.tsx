import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react'
import { useState } from 'react'
import {
  Container,
  FormContainer,
  HeaderForm,
  HeaderPay,
  BodyForm,
  GroupInput,
  Pay,
  PayTypeContainer,
  RadioBox,
} from './styles'
export function Cart() {
  const [payType, setPayType] = useState('')

  const handlePayType = (type: string) => {
    setPayType(type)
  }
  return (
    <Container>
      <div>
        <h3>Complete seu pedido</h3>
        <FormContainer>
          <HeaderForm>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderForm>
          <BodyForm>
            <label id="cep" htmlFor="cep">
              <input id="cep" type="text" placeholder="CEP" />
            </label>
            <label id="rua" htmlFor="rua">
              <input id="rua" type="text" placeholder="Rua" />
            </label>
            <GroupInput>
              <label htmlFor="numero">
                <input id="numero" type="text" placeholder="Número" />
              </label>
              <label htmlFor="complemento">
                <input id="complemento" type="text" placeholder="Complemento" />
              </label>
            </GroupInput>
            <GroupInput>
              <label htmlFor="bairro">
                <input id="bairro" type="text" placeholder="Bairro" />
              </label>
              <label htmlFor="cidade">
                <input id="cidade" type="text" placeholder="Cidade" />
              </label>
              <label htmlFor="uf">
                <input id="uf" type="text" placeholder="UF" />
              </label>
            </GroupInput>
          </BodyForm>
        </FormContainer>
        <Pay>
          <HeaderPay>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </HeaderPay>
          <PayTypeContainer>
            <RadioBox
              onClick={() => handlePayType('credito')}
              isActive={payType === 'credito'}
            >
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </RadioBox>

            <RadioBox
              onClick={() => handlePayType('debito')}
              isActive={payType === 'debito'}
            >
              <Bank size={16} />
              <span>CARTÃO DE DEBITO</span>
            </RadioBox>

            <RadioBox
              onClick={() => handlePayType('dinheiro')}
              isActive={payType === 'dinheiro'}
            >
              <Money size={16} />
              <span>DINHEIRO</span>
            </RadioBox>
          </PayTypeContainer>
        </Pay>
      </div>
      <div>
        <h3>Cafés selecionado</h3>
      </div>
    </Container>
  )
}
