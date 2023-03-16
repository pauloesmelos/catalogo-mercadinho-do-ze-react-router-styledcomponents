import React from 'react';
import styled from 'styled-components';
import facebook from '../assets/redessociais/Facebook.png';
import twitter from '../assets/redessociais/Twitter.png';
import instagram from '../assets/redessociais/Instagram.png';
import tiktok from '../assets/redessociais/Tiktok.png';
import google from '../assets/redessociais/google.png';
import Link from './Link';

const FooterStyle = styled.footer`
    background-color: rgb(255, 204, 0);
    padding: 1rem;
    box-shadow: .1rem .1rem .5rem .1rem #999;
    text-align: center;
`;
const Text = styled.span`
    color: #444;
    font-weight: lighter;
    font-size: .9rem;
`;
const Subtitle = styled.h3`
    color: #555;
    font-weight: lighter;
`;
const Links = styled.div`
    display: flex;
    justify-content: space-around;
`;
const DivLinks = styled.div`

`;
const About = styled.div`

`;
const Hr = styled.hr`
    width: 100%;
    border: none;
    border: 1px solid rgba(0,0,0,.1);
    margin-bottom: 1rem;
`;
const Imagem = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    background-size: cover;
    cursor: pointer;
    &:hover{
        filter: invert(100);
    }
`;
const Paragraph = styled.div`
    margin: 1rem 0 1.5rem 0;
    color: #999;
`;
const Footer = ({text}) => {
  return (
    <FooterStyle>
        <Links>
            <DivLinks>
                <Link content={<Imagem src={twitter} alt='logo twitter' />} href='https://twitter.com/'/>
                <Link content={<Imagem src={facebook} alt='logo facebook'/>} href='https://facebook.com/' />
                <Link content={<Imagem src={instagram} alt='logo instagram'/>} href='https://instagram.com/'/>
                <Link content={<Imagem src={tiktok} alt='logo tiktok' />} href='https://tiktok.com/' />
            </DivLinks>
            <DivLinks>
                <Subtitle>Sobre o Mercadinho do Zé</Subtitle>
                <Paragraph><Link content='Trabalhe conosco' href='#'></Link></Paragraph>
                <Paragraph><Link content='Central de ajuda' href='#'></Link></Paragraph>
                <Paragraph><Link content='Unidade Alfenas' href='#'></Link></Paragraph>
                <Paragraph><Link content='Unidade São Paulo' href='#'></Link></Paragraph>
            </DivLinks>
            <DivLinks>
                <Subtitle>Já baixou o aplicativo ?</Subtitle>
                <Imagem src={google} alt='Google play' width='150px' height='60px' />
            </DivLinks>
        </Links>
        <About>
            <Hr></Hr>
            <Text>{text}</Text>
        </About>
    </FooterStyle>
  )
}

export default Footer;