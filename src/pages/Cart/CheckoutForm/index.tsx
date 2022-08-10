import { MapPinLine } from 'phosphor-react'
import { FormContainer, BodyForm, GroupInput, HeaderForm } from './styles'

export function CheckoutForm() {
  return (
    <FormContainer>
      <HeaderForm>
        <MapPinLine size={22} />
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </HeaderForm>
      <BodyForm>
        <label id="cepfield" htmlFor="cep">
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
  )
}
