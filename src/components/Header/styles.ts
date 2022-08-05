import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`
interface HeaderProps {
  cartSize: number
}

export const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.background};
  padding: 2rem;
  max-width: 74rem;
  margin: 0 auto;
  a {
    img {
      width: 85px;
      height: 40px;
    }
  }

  nav {
    a {
      text-decoration: none;
      div {
        position: relative;
        svg {
          color: ${(props) => props.theme['yellow-dark']};
          background: ${(props) => props.theme['yellow-light']};
          padding: 8px;
          box-sizing: content-box;
          border-radius: 6px;
        }

        &::after {
          display: ${(props) => (props.cartSize > 0 ? 'flex' : 'none')};
          content: '${(props) => props.cartSize}';
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;

          position: absolute;
          top: -8px;
          right: -8px;

          font-size: 12px;
          color: ${(props) => props.theme.white};
          background: ${(props) => props.theme['yellow-dark']};
          border-radius: 50%;
        }
      }
    }
  }
`
