import styled from 'styled-components'

export const PayContainer = styled.div`
  margin: 12px 0 12px 0;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  width: 100%;
`
export const PayTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

interface RadioBoxProps {
  isActive: boolean
}
export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  width: 11rem;
  background: ${(props) =>
    props.isActive ? props.theme['purple-light'] : props.theme['base-button']};

  border-color: ${(props) => props.theme.purple};
  border-width: ${(props) => (props.isActive ? '1px' : 0)};
  border-style: solid;
  border-radius: 6px;
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
  &:hover {
    background: ${(props) => props.theme['base-hover']};
    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    font-size: 12px;
    color: ${(props) => props.theme['base-text']};
  }
`
export const HeaderPay = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 2rem;
  svg {
    color: ${(props) => props.theme.purple};
  }
`
