import styled from 'styled-components'

export const HomeContainer = styled.div``

export const Banner = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 12rem 0 6rem 0;

  @media (max-width: 992px){
    &{
      gap: 1rem;
    }
  }

  @media (max-width: 768px){
    padding-top: 8rem;
  }
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

  @media (max-width: 992px){
    h1{
      font-size: 36px;
    }

    p{
      font-size: 18px;
    }
  }

  @media (max-width: 768px){
    h1{
      font-size: 28px;
    }

    p{
      font-size: 14px;
    }
  }
`
export const ImageCoffe = styled.div`

  @media (max-width: 992px){
    img{
      width: 400px;
    }
  }

  @media (max-width: 768px){
    img{
      width: 250px;

    }
  }
  @media (max-width: 640px){
    img{
      display: none;
    }
  }
`
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

  @media (max-width: 992px){
    gap: 1rem;
    div{
      p{
        font-size: 0.75rem;
      }
    }
  }

  @media (max-width: 640px){
    margin-top: 0;
    justify-content: flex-start;
  }
`

export const ListCoffe = styled.div`
  margin-bottom: 6rem;
  h2 {
    font-size: 32px;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    font-weight: 800;
  }
  ul {
    list-style: none;
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media (max-width: 992px){
    h2{
      font-size: 24px;
    }
    ul{
      justify-content: center;
    }
  }
`
