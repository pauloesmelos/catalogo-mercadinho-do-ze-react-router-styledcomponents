import React from 'react';
import menu from '../assets/menu.png';
import styled from 'styled-components';
const Menu = styled.img`
    border-radius: 0%;
    width: 30px;
    height: 30px;
    margin-top: .7rem;
    position: absolute;
    margin: 0;
    top: 1.8rem;
    right: 3rem;
    cursor: pointer;
    &:hover{
        filter: invert(90%);
    }
`;
const MenuMobile = ({show,setActiveMenuMobile}) => {
    const handleClick = (event) => {
        setActiveMenuMobile(e => !e);//eu poderia passar o estado activeMenuMobile pelas props tbm, caso quisesse
    };
  return (
    <>
        <Menu src={menu} alt='menu' show={show} onClick={handleClick} setActiveMenuMobile={setActiveMenuMobile}></Menu>
    </>
  )
}

export default MenuMobile;