import styled from 'styled-components'

export const PayContainer = styled.div`
  margin: 12px 0 12px 0;
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`
export const PayTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  border-style: solid;
  border-width: ${(props) => (props.isActive ? '1px' : 0)};
  border-color: ${(props) => props.theme.purple};
  border-radius: 6px;
  transition: 300s;
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
