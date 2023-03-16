import React, { useRef } from 'react';
import styled from 'styled-components';
import Head from './Components/Head';
import mapa from './assets/mapa.jpg';
import { goTop,Title } from './Home';
import { smartphone } from './Components/Header';
const Section = styled.section`
  margin-top: 5rem;
`;
const Background = styled.div`
  background: ${({url}) => url ? `url(${url})` : undefined};
  padding-top: 30rem;
  height: auto;
  width: auto;
  max-width: 70%;
  background-size: cover;
  background-position: center;
  margin-left: auto;
  margin-right: auto;
  box-shadow: .5rem .5rem .8rem .1rem rgb(192, 192, 192);
  border-radius: 5px;
  margin-bottom: 10rem;
`;
const DivUl = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0 8rem 0;

  @media (max-width: ${smartphone}){
    
  }
`;
const Ul = styled.ul`
  
`;
const Li = styled.li`
  list-style-type: none;
  font-size: 1.3rem;
  color: #888;
  margin-top: 1rem;
  &::before {
    content: '';
    display: inline-block;
    height: 8px;
    width: 35px;
    background-color: rgb(255, 204, 0);
    margin-right: 1rem;
  }
`;

const Contato = () => {
  const img = useRef();
  const newTooltip = () => {
    const div = document.createElement('div');
    div.innerText = 'Rua das Avenidas, Alfenas - MG';
    div.classList.add('tooltip');
    return div;
  };
  const move = (evento,tooltip) => {
    tooltip.style.left = evento.pageX + 20 + 'px';
    tooltip.style.top = evento.pageY + 20 + 'px';
  }
  const events = () => {
    const tooltip = newTooltip();
    document.body.appendChild(tooltip);
    img.current.addEventListener('mousemove', (event) => {
      move(event,tooltip);
    });
    img.current.addEventListener('mouseleave', () => {
      const tool = [...document.body.childNodes];
      if(tool.includes(tooltip))//verifica se no array de filhos do body existe o nó HTML do tooltip
        document.body.removeChild(tooltip);
    });
  };
  React.useEffect(() => {
    goTop();
  });//goTop é uma função exportada que joga o scroll p (0,0) 
  
  return (
    <Section className={'left'}>
      <Head title='Mercadinho do Zé - Contato' description='Contato - Projeto Catálogo ReactJS Javascript Paulo Eduardo Souza de Melos pauloesmelos' keywords='contato,pauloesmelos,catálogo,produtos,react'/>
      <Section>
      <Title tamanho='2rem'>Contato</Title>
        <DivUl>
          <Ul>
            <Li>Mercadinho do Zé</Li>
            <Li>Rua das Avenidas</Li>
            <Li>+55 (35) 99999-8888</Li>
            <Li>mercadinhoze@sac.com</Li>
          </Ul>
        </DivUl>
        <Background ref={img} url={mapa} onMouseOver={events}></Background>
      </Section>
    </Section>
  )
}

export default Contato;