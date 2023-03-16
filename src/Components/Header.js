import React from 'react';
import { NavLink } from 'react-router-dom';
import style from 'styled-components';
import LogoSvg from '../assets/LogoSvg';
import Button from './Button';
import MenuMobile from './MenuMobile';
export const smartphone = '650px';
export const tablet = '1110px';

const Nav = style.nav`
    padding: 1rem;
    background-color: rgb(255, 204, 0);
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    z-index: 100;
    box-shadow: .1rem .1rem .3rem .1rem #a9c0c0;

    @media(max-width: ${smartphone}){
       display: ${({activeMenuMobile}) => activeMenuMobile ? 'block' : 'flex'};
       height: ${({activeMenuMobile}) => activeMenuMobile ? '22rem' : 'initial'};
       animation: ${({activeMenuMobile}) => activeMenuMobile ? 'showNav .2s forwards' : 'initial'}
    }
    @keyframes showNav {
        from{
            opacity: .3;
        }
        to{
            opacity: 1;
        }
    }
`;
const ContainerLogo = style.div`
    display: flex;
    margin-left: 3rem;

    @media (max-width: ${smartphone}) {
        display: block;
        margin-left: 0;
    }
`;
const LogoTexto = style.span`
    color: #fff;
    font-weight: bolder;
    font-size: 1.4rem;
    margin-left: 1rem;
    line-height: 2rem;
    cursor: pointer;
`;
const Ul = style.ul`
    display: flex;
    justify-content: right;
    animation: showUl .5s forwards;
    @media(max-width: ${smartphone}){
        position: ${({activeMenuMobile}) => activeMenuMobile ? 'absolute' : 'none'};
        display: ${({activeMenuMobile}) => activeMenuMobile ? 'block' : 'none'};
        margin-top: ${({activeMenuMobile}) => activeMenuMobile ? '2rem' : 'initial'};
        animation: ${({activeMenuMobile}) => activeMenuMobile ? 'showUl .4s forwards' : 'none'};
    }
    @keyframes showUl{
        from {
            opacity: 0;
            transform: translateX(-1rem);
        }
        to {
            opacity: 1;
            transform: translateX(1rem);
        }
    }
`;
const Li = style.li `
    list-style-type: none;
    margin-right: 2.5rem;
    line-height: 2rem;

    @media(max-width: ${smartphone}){
        margin-top: 1rem;
    }
`;
const NavLinkStyle = style(NavLink)`
    text-decoration: none;
    color: #fff;
    font-weight: bolder;
    font-size: 1.1rem;

    &.active{
        padding: .5rem;
        border-radius: 10px;
        color: #fff;
        background-color: #444;
    }
`;    
const Header = ({text}) => {
    const [showMenu,setShowMenu] = React.useState(false);
    const [activeMenuMobile,setActiveMenuMobile] = React.useState(false);

    React.useEffect(() => {
        const tela = window.innerWidth;
        if(tela <= +smartphone.replace('px',''))
            setShowMenu(true);
    },[]); 
    React.useEffect(() => {
        console.log(activeMenuMobile);
    },[activeMenuMobile]);
  return (
    <>
        <Nav activeMenuMobile={activeMenuMobile}>
            <ContainerLogo>
                <LogoSvg />
                <LogoTexto>{text}</LogoTexto>
            </ContainerLogo>
            <MenuMobile show={showMenu} setActiveMenuMobile={setActiveMenuMobile} />
            <Ul activeMenuMobile={activeMenuMobile}>
                <Li>
                    <NavLinkStyle to='/' end>Home</NavLinkStyle>
                </Li>
                <Li>
                    <NavLinkStyle to='sobre'>Sobre</NavLinkStyle>
                </Li>
                <Li>
                    <NavLinkStyle to='contato'>Contato</NavLinkStyle>
                </Li>
                <Li>
                    <Button color='#fff' background='#4aae71' text='Login' />
                </Li>
            </Ul>
        </Nav>
    </>
  )
}

export default Header;