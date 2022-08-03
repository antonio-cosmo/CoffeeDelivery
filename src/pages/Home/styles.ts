import styled from 'styled-components'

export const HomeContainer = styled.div``

export const Banner = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 6rem 0;
`

export const Text = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1rem;
    font-size: 20px;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ImageCoffe = styled.div``
export const Beneficios = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;

  div {
    p {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.75rem;

      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};

      svg {
        padding: 8px;
        border-radius: 50%;
        color: ${(props) => props.theme.white};
      }
    }

    &.column-1 {
      p:nth-child(1) > svg {
        background: ${(props) => props.theme['yellow-dark']};
      }
      p:nth-child(2) > svg {
        background: ${(props) => props.theme.yellow};
      }
    }

    &.column-2 {
      p:nth-child(1) > svg {
        background: ${(props) => props.theme['base-text']};
      }
      p:nth-child(2) > svg {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`

export const ListCoffe = styled.div`
  h2 {
    font-size: 32px;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    font-weight: 800;
  }
`
