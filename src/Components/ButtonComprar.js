import React from 'react'
import styled from 'styled-components';
const BtnComprar = styled.button`
    padding: 1.3rem 2rem;
    background-color: #10ce10;
    color: #fff;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 10px;
    margin-top: ${({marginTop}) => marginTop};
    &:hover{
        opacity: .5;
    }
    
`;
const ButtonComprar = ({text,marginTop}) => {
  return (
    <BtnComprar marginTop={marginTop}>
        {text}
    </BtnComprar>
  )
}

export default ButtonComprar;