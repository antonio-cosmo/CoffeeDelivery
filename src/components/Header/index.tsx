import { HeaderContainer, Container } from './styles'
import logoImg from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { useCartContext } from '../../context/Cart'
export function Header() {
  const { cart } = useCartContext()

  const cartSize = cart.length
  return (
    <Container>
      <HeaderContainer cartSize={cartSize}>
        <NavLink to="/">
          <img src={logoImg} alt="" />
        </NavLink>
        <nav>
          <NavLink to="/cart">
            <div>
              <ShoppingCart size={22} weight="fill" />
            </div>
          </NavLink>
        </nav>
      </HeaderContainer>
    </Container>
  )
}
