import {
  Container,
  Checkout,
  ItemsCart,
  Card,
  Items,
  PayTotal,
  ButtonConfirm,
} from './styles'
import { Item } from './components/Item'
import { useCartContext } from '../../context/Cart'
import { priceFormat } from '../../util/priceFormat'
import { CheckoutForm } from './components/CheckoutForm'

export function Cart() {
  const { cart } = useCartContext()
  
  const taxa = 3.5

  const totalItems = cart.reduce((acc, product) => {
    return acc +=  product.total
  }, 0)
  
  return (
    <Container>
      <Checkout>
        <h3>Complete seu pedido</h3>
        <CheckoutForm />
      </Checkout>
      <ItemsCart>
        <h3>Cafés selecionado</h3>
        <Card>
          <Items>
            {cart.length > 0 ? (
              cart.map((item) => {
                return <Item key={item.id} product={item} />
              })
            ) : (
              <p>Seu carrinho está vazio:</p>
            )}
          </Items>
          <PayTotal>
            <div>
              <p>Total de itens</p>
              <p>{priceFormat(totalItems)}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>{priceFormat(taxa)}</p>
            </div>
            <div>
              <p>Total</p>
              <p>
                {cart.length > 0
                  ? priceFormat(taxa + totalItems)
                  : priceFormat(0)}
              </p>
            </div>
          </PayTotal>

          <ButtonConfirm
            type="submit"
            form="checkout-form"
            disabled={!(cart.length > 0)}
          >
            CONFIRMAR PEDIDO
          </ButtonConfirm>
        </Card>
      </ItemsCart>
    </Container>
  )
}
