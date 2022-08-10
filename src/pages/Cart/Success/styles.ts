import styled from 'styled-components'

export const Conatainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 10rem;
`

export const TextSuccess = styled.div``
export const Header = styled.div`
  margin-bottom: 40px;
  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 1.3;
  }
  p {
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }
`
export const Details = styled.div`
  position: relative;
  padding: 40px;

  div + div {
    margin-top: 2rem;
  }
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background-image: linear-gradient(
      45deg,
      rgb(219, 172, 44, 1),
      rgb(128, 71, 248, 1)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);

    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const Text = styled.div``
export const Bold = styled.span`
  display: inline;
  font-weight: 700;
`
export const TextInfor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  svg {
    padding: 8px;
    border-radius: 50%;
    color: ${(props) => props.theme.background};
  }

  .mapin {
    background-color: ${(props) => props.theme.purple};
  }
  .timer {
    background-color: ${(props) => props.theme.yellow};
  }
  .currency {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
