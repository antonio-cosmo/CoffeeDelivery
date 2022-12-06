import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PayContainer, HeaderPay, PayTypeContainer, RadioBox } from './styles'

interface IPayProps{
  handlePayType: (value: string)=> void
  payType: string
}
export function PayType({handlePayType,payType}:IPayProps) {
  
  return (
    <PayContainer>
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
          type="button"
          onClick={() => handlePayType('credito')}
          isActive={payType === 'credito'}
        >
          <CreditCard size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => handlePayType('debito')}
          isActive={payType === 'debito'}
        >
          <Bank size={16} />
          <span>CARTÃO DE DEBITO</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => handlePayType('dinheiro')}
          isActive={payType === 'dinheiro'}
        >
          <Money size={16} />
          <span>DINHEIRO</span>
        </RadioBox>
      </PayTypeContainer>
    </PayContainer>
  )
}
