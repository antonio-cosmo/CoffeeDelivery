import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;

  margin-top: 10rem;

  div {
    h3 {
      margin-bottom: 16px;
    }
  }
`
export const Checkout = styled.div`
  width: 40rem;
`

export const ItemsCart = styled.div`
  width: 28rem;
`
export const Card = styled.div`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const Items = styled.ul`
  list-style: none;
`

export const PayTotal = styled.div`
  margin: 24px 0;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 12px 0;
  }
`

export const ButtonConfirm = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-size: 14px;
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
