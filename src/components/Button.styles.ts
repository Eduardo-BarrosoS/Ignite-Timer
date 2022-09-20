import styled, { css } from 'styled-components';

export type ButtonVariant =  'primary' | 'secondary' | 'danger' | 'success' 

interface ButtonContainerProps {
    variant?: ButtonVariant
}

const buttonVariant = {
    primary: 'purple',
    secondary: 'red',
    danger: 'orange',
    success: 'green', 
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 8rem;
    height: 4rem;

    background-color:  ${props => props.theme.};

`