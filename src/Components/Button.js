import React from 'react'
import style from 'styled-components';
const ButtonStyle = style.button`
    padding: .6rem 1.2rem;
    background-color: ${props => props.background};
    color: ${props => props.color};
    border: none;
    border-radius: 8px;
    font-weight: bolder;
    font-size: .9rem;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background: black;
        color: white;
        transform: scale(1.1);
    }
`;

const Button = ({background,color,text,...props}) => {//props pode ser onClick, por exemplo
  return (
    <ButtonStyle background={background} color={color} {...props}>
        {text}
    </ButtonStyle>
  )
}

export default Button;