import styled, { css } from 'styled-components';

export const Button = styled.button`
    padding: 0.2rem 3rem;
    border: 1px solid;
    border-radius: 20px;
    background: transparent;
    color: inherit;
    cursor: pointer;
    transition: box-shadow border 1s ease-in-out;

    ${props => props.primary && css`
        border-color: tomato;
        background: tomato;
    `}

    ${props => props.large && css`
        padding: 0.5rem 3rem;
        border-radius: 50px;
    `}

    ${props => props.outline && css`
        border-color: tomato;
        background: transparent;
        color: tomato;
    `}

    &:hover {
        border: none;
        box-shadow: 2px 3px 4px 2px rgb(0, 0, 0, 0.5);
    }
`;