import React from 'react';
import styled from 'styled-components';
import { smartphone } from './Header';

const ContainerModal = styled.div`
    margin: 0;
    bottom: 0;
    width: 100%;
    display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
    justify-content: center;
    gap: 1rem;/*gap tbm funciona no display flex */
    padding: 1rem;
    box-sizing: border-box;
    position: fixed;
    z-index: 200;
    background-color: #fff;
    box-shadow: .1rem .1rem .3rem .2rem #ccc;
    text-align: center;
    backdrop-filter: blur(10px);/*blur no fundo - útil em modal que pegam a tela inteira */

    @media (max-width: ${smartphone}) {
        flex-wrap: wrap;
    }
`;
const Texto = styled.p`
    color: tomato;
    font-weight: bolder;
    line-height: 1.5rem;
`;
const ButtonCookie = styled.button`
    padding: .5rem 1rem;
    border: none;
    background-color: ${({backgroundColor}) => backgroundColor};
    color: #fff;
    font-weight: bolder;
    cursor: pointer;
    display: block;

    &:hover{
        opacity: .6;
    }
`;
const Modal = () => {
    const [isOpen,setIsOpen] = React.useState(true);
    React.useEffect(() => {
        console.log(isOpen);
    },[isOpen]);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <ContainerModal isOpen={isOpen}>
        <Texto>
            Este site utiliza cookies para melhorar sua experiência
        </Texto>
        <ButtonCookie backgroundColor={'#4aae71'} onClick={handleClick}>Aceitar</ButtonCookie>
        <ButtonCookie backgroundColor={'tomato'} onClick={handleClick}>Fechar</ButtonCookie>
    </ContainerModal>
  )
}

export default Modal;