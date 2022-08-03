import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.background};
  padding: 2rem 0;
  span {
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
          display: none;
          content: '3';
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
