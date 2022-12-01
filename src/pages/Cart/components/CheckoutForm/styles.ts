import styled from 'styled-components'

export const FormContainer = styled.form`
  padding: 40px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  @media (max-width: 640px){
    padding: 15px;
  }
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
        outline: none;
        box-shadow: 0 0 2px ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  #cepfield {
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

  label:nth-child(1) {
    flex: 3;
  }
  label:nth-child(2) {
    flex: 3;
  }
  label:nth-child(3) {
    flex: 1;
  }
`

export const PayContent = styled.div`
  width: 100%; 
  margin-top: 2rem;
`
