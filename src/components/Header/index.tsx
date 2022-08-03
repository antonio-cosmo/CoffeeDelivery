import { HeaderContainer } from './styles'
import logoImg from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoImg} alt="" />
      </span>
      <nav>
        <NavLink to="/">
          <div>
            <ShoppingCart size={22} weight="fill" />
          </div>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
