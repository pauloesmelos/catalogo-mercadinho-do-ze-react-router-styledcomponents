import React, { useRef } from 'react';
import Slide from './Components/Slide';
import foto1 from './assets/notebook.jpg';
import foto2 from './assets/telefone.jpg';
import foto3 from './assets/apple.jpg';
import sobre from './assets/sobre.png';
import styled from 'styled-components';
import { goTop, Section, Title } from './Home';
import Head from './Components/Head';
import { smartphone } from './Components/Header';

const ParagraphDescription = styled.p`
  color: #777;
  word-spacing: 1rem;
  line-height: 1.6rem;
  margin-top: 1rem;
  letter-spacing: .1rem;
`;
const SubTitle = styled.h3`
  color: #666;
  text-align: center;
  font-size: ${({tam}) => tam};
  font-weight: bolder;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-top: ${({valor}) => valor ? '3rem' : '0'};
  &::before {
    content: '';
    display: ${({valor}) => valor ? 'inline-block' : 'initial'};
  }
`;
const ContainerSobre = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 5rem;
  padding-bottom: 10rem;
  flex-wrap: wrap;
`;
const ContainerText = styled.div`
  width: 50%;
`;
const ContainerData = styled.div`
  padding-bottom: 12rem;
  
`;
const ContainerVendas = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);

  @media (max-width: ${smartphone}) {
    grid-template-columns: repeat(2, 25%);
    gap: 5.5rem;
  }
`;

const Imagem = styled.img`
  background-size: cover;
  border-radius: 10px;
  width: 20rem;
  height: 20rem;

  @media (max-width: ${smartphone}){
    max-width: 40rem;
    max-height: 20rem;
    margin-top: 5rem;
  }
`;
const GridVendas = styled.div`
  
`;
const Value = styled.span`
  color: rgb(74, 174, 113);
  font-weight: bolder;
  font-size: 1.7rem;
  font-family: monospace;
  margin-left: .5rem;
`;
const Moeda = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color: #777;
  margin-top: 1rem;
`;

const slides = [
  {
    content: foto3,
    id: 0,
  },
  {
    content: foto2,
    id: 1,
  },
  {
    content: foto1,
    id: 2,
  },
];
const Sobre = () => {
  const [dados,setDados] = React.useState(null);
  const [loading,setLoading] = React.useState(false);
  const [active,setActive] = React.useState(null);//mutation
  const target = useRef();//div que ira ser animada

  const handleScroll = (event) => {
    if(target.current !== null){
      const top = target.current.getBoundingClientRect().top;
      const meio = window.innerHeight * 0.9;
      if( top  < meio  && target.current !== null)
        setActive(true);
    }
  }
  const animeNum = () => {
      const numeros = document.querySelectorAll('.cash');
      numeros.forEach((elemento,indice) => {
        const str = elemento.innerText;
        const valorInicial = +elemento.innerText.replace('.','');
        let soma = 0;
        elemento.innerText = 0;

        let t = setInterval(() => {
          soma += Math.ceil(valorInicial / 50);
          elemento.innerText = soma;
          if(valorInicial < soma){
            elemento.innerText = str;
            clearInterval(t);
          }
        },200 * Math.random());

      });
  }

  async function fetchDados(url){
    try{
      setLoading(true);
      const response = await fetch(url);
      const body = await response.json();
      setDados(body);
    }
    catch(erro){
      console.log(erro);
    }
    finally{
      setLoading(false);
    }
  }
  React.useEffect(() => {
    fetchDados('./faturamento.json');
    window.addEventListener('scroll',handleScroll);
    goTop();
  },[]);
  React.useEffect(() => {
    if(active)
      animeNum();
  },[active]);

  if(loading)
    return <div className='loading'></div>
  if(dados === null)
    return null;

  return (
    <Section className={'left'}>
      <Head title='Mercadinho do Zé - Sobre' description='Sobre - Projeto Catálogo ReactJS Javascript Paulo Eduardo Souza de Melos pauloesmelos' keywords='sobre,pauloesmelos,catálogo,produtos,react'/>
      <Title tamanho='2rem'>Sobre</Title>
      <Slide slides={slides} />
      <ContainerSobre>
        <ContainerText>
          <SubTitle valor={false} tam='1.5rem'>Transformamos o <span style={{color: 'rgb(74, 174, 113)'}}>mercado</span> pensando no ecossistema</SubTitle>
          <ParagraphDescription>
          Nosso objetivo é fornecer soluções eficazes e personalizadas para atender às necessidades exclusivas de cada cliente. Valorizamos a honestidade, a integridade e a transparência em tudo o que fazemos, e nos esforçamos para construir relacionamentos duradouros com nossos clientes.
          </ParagraphDescription>
          <ParagraphDescription>
          Estamos comprometidos em fazer a diferença em nossa comunidade, e isso se reflete em nossas práticas de negócios responsáveis ​​e nossa participação em iniciativas de caridade e filantropia.
          </ParagraphDescription>
        </ContainerText>
        <Imagem src={sobre}/>
      </ContainerSobre>
      <ContainerData>
        <SubTitle valor={false} tam='1.5rem'>Nossas de vendas em <span style={{color: 'rgb(74, 174, 113)'}}>marketplace</span> nos últimos anos</SubTitle>
        <ContainerVendas ref={target}>
          {dados.map((elemento,indice) => (
            <GridVendas key={indice}>
              <SubTitle valor={true} tam='2.1rem'>{elemento.ano}</SubTitle>
              <Moeda>R$<Value className='cash'>{elemento.valor}</Value></Moeda>
            </GridVendas>
          ))}
        </ContainerVendas>
      </ContainerData>
    </Section>
  )
}

export default Sobre;