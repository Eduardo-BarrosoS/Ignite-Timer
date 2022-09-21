import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant?: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 8rem;
  height: 4rem;
  border: none;
  border-radius: 0.4rem;
  margin: 1.2rem;

  background-color: ${(props) => props.theme['green-500']};
`
