import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  span {
    img {
      width: 85px;
      height: 40px;
    }
  }

  nav {
    svg {
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
      padding: 8px;
      box-sizing: content-box;
    }
  }
`
