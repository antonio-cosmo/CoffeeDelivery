import { HeaderContainer } from './styles'
import logoImg from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCartSimple } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoImg} alt="" />
      </span>
      <nav>
        <NavLink to="/">
          <ShoppingCartSimple size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
