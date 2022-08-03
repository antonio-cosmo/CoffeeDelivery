import styled from 'styled-components'

export const Coffe = styled.li`
  display: inline-block;
  width: 16rem;
  text-align: center;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  border-top-right-radius: 36px;
  margin-top: 40px;
  padding: 0 20px 20px 20px;
`

export const CoffeImage = styled.div`
  margin-top: -20px;
  span {
    display: inline-block;
    font-size: 10px;
    color: ${(props) => props.theme['yellow-dark']};
    padding: 4px 8px;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
  }
`
export const Description = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  h3 {
    font-size: 20px;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme['base-label']};
    line-height: 1.3;
  }
`
export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 20px;
  }
`
export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
  padding: 9px;
  border-radius: 6px;

  button {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  span {
    font-size: 16px;
    color: ${(props) => props.theme['base-title']};
  }
`
export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & > svg {
    padding: 8px;
    color: ${(props) => props.theme['base-card']};
    background: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
  }
`
