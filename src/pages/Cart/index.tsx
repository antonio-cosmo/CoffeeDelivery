import { useState } from 'react'
import {
  Container,
  Checkout,
  ItemsCart,
  Card,
  Items,
  PayTotal,
  ButtonConfirm,
} from './styles'
import { Item } from './Item'
import { useCartContext } from '../../context/Cart'
import { priceFormat } from '../../util/priceFormat'
import { CheckoutForm } from './CheckoutForm'
import { Pay } from './Pay'

export function Cart() {
  const { cart } = useCartContext()

  const totalItems = cart.reduce((total, product) => {
    const productTotal: number = product.price * product.amount

    return (total += productTotal)
  }, 0)

  const taxa = 3.5

  return (
    <Container>
      <Checkout>
        <h3>Complete seu pedido</h3>
        <CheckoutForm />
        <Pay />
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

          <ButtonConfirm type="submit" form="checkout-form">
            CONFIRMAR PEDIDO
          </ButtonConfirm>
        </Card>
      </ItemsCart>
    </Container>
  )
}
