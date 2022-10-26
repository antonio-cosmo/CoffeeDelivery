import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { PayContainer, HeaderPay, PayTypeContainer, RadioBox } from './styles'

interface PayProps{
  handleTypePay: (value: string)=> void
}
export function Pay({handleTypePay}:PayProps) {
  const [payType, setPayType] = useState('')
  handleTypePay(payType)
  
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
          onClick={() => setPayType('credito')}
          isActive={payType === 'credito'}
        >
          <CreditCard size={16} />
          <span>CARTÃO DE CRÉDITO</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => setPayType('debito')}
          isActive={payType === 'debito'}
        >
          <Bank size={16} />
          <span>CARTÃO DE DEBITO</span>
        </RadioBox>

        <RadioBox
          type="button"
          onClick={() => setPayType('dinheiro')}
          isActive={payType === 'dinheiro'}
        >
          <Money size={16} />
          <span>DINHEIRO</span>
        </RadioBox>
      </PayTypeContainer>
    </PayContainer>
  )
}
