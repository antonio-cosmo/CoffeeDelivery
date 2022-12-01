import styled from 'styled-components'

export const ItemCard = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 32px;

  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 64px;
  }

  & .containerActions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      white-space: nowrap;
      line-height: 1.3;
    }
  }

  & .total {
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
  }
`
export const Actions = styled.div`
  display: flex;
  gap: 8px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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
  }
`
export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${(props) => props.theme['base-button']};
  padding: 9px;
  border-radius: 6px;
  border: none;
  line-height: 0;
  transition: 300s;
  &:hover {
    background: ${(props) => props.theme['base-hover']};
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
  & > svg {
    color: ${(props) => props.theme.purple};
  }

  & > span {
    font-size: 12px;
    color: ${(props) => props.theme['base-text']};
  }
`
