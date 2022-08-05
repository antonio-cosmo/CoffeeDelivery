import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  margin-top: 10rem;

  div {
    h3 {
      margin-bottom: 16px;
    }
  }
`

export const FormContainer = styled.form`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

const baseHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 2rem;

  div {
    p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.3;
    }
    span {
      font-size: 14px;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;
    }
  }
`

export const HeaderForm = styled(baseHeader)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const HeaderPay = styled(baseHeader)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  label {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    input {
      font-size: 14px;
      border: none;
      background: none;
      color: ${(props) => props.theme['base-label']};
      padding: 12px;
      width: 100%;

      &:focus {
        outline-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  #cep {
    width: 50%;
  }
  #rua {
    width: 100%;
  }
`

export const GroupInput = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  label {
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    width: 50%;

    input {
      font-size: 14px;
      border: none;
      background: none;
      color: ${(props) => props.theme['base-label']};
      padding: 12px;
      width: 100%;
    }
  }
`
export const Pay = styled.div`
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
  background-color: ${(props) =>
    props.isActive ? props.theme['purple-light'] : props.theme['base-button']};

  border-style: solid;
  border-width: ${(props) => (props.isActive ? '1px' : 0)};
  border-color: ${(props) => props.theme.purple};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }
  span {
    font-size: 12px;
    color: ${(props) => props.theme['base-text']};
  }
`
