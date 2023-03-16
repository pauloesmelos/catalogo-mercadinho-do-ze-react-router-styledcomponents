import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';
import Head from './Components/Head';
import { smartphone, tablet } from './Components/Header';

export const goTop = () => {window.scroll(0,0)};

export const Section = style.section`
    padding: 1rem;
    will-change: transform;
`;
const Container = style.div`
    display: grid;
    grid-template-columns: repeat(3,25%);
    gap: 5rem;
    margin: 5rem auto;
    max-width: 50%;

    @media (max-width: ${smartphone}) {
        margin: 0;
    }
    @media (max-width: ${tablet}){
        max-width: 100%;
    }
    @media (max-width: 475px){
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
    }
`;
const Product = style.div`

`;

export const Title = style.h1`
    color: #999;
    margin: 7rem 0 0 1rem;
    font-size: ${({tamanho}) => tamanho};
    font-family: monospace;
    text-align: center;
    padding-top: ${({paddingTop}) => paddingTop};
`;
export const TitleProducts = style.h2`
    color: #555;
    text-align: center;
    margin-bottom: 2rem;
    &:hover{
        color: rgb(255, 204, 0);
    }
`;
const Imagem = style.img`
    max-width: 200px;
    max-height: 300px;
    box-shadow: .1rem .1rem .3rem .1rem #999;
    filter: grayscale(100%);
    &:hover {
        transform: scale(1.03);
        box-shadow: .1rem .2rem .5rem .3rem #d3d2d2;
        filter: none;
    }
    @media (max-width: ${tablet}){
        max-width: 180px;
        max-height: 280px;
    }
    @media (max-width: ${smartphone}) {
        max-width: 100px;
        max-height: 200px;
    }
`
const LinkStyle = style(Link)`/*mudando a tag do react-router-dom <Link> para <LinkStyle>*/
    text-decoration: none;
`;
const Home = () => {
    const [products,setProducts] = React.useState(null);
    const [loading,setLoading] = React.useState(false);
    const [erro,setErro] = React.useState(null);

    const goTop = () => {window.scroll(0,0)}
    const fetchProducts = (url) => {
        try{
            setLoading(true);
            fetch(url)
            .then(response => response.json())
            .then(body => setProducts(body));
        }
        catch(erro){
            setErro(erro);
        }
        finally{
            setLoading(false);
        }
    }
    React.useEffect(() => {
        fetchProducts('https://ranekapi.origamid.dev/json/api/produto');
        goTop();
    },[]);

    if(loading)
        return <div className='loading'></div>
    if(products === null)
        return null;
    if(erro)
        return <p>{erro}</p>
  return (
    <Section className={'left'}>
        <Head title='Mercadinho do Zé - Home' description='Projeto Catálogo ReactJS Javascript Paulo Eduardo Souza de Melos pauloesmelos' keywords='pauloesmelos,catálogo,produtos,react'/>
        <Title tamanho='1.6rem'>Home - Produtos disponíveis: {products !== null ? `${products.length}` : '0'}</Title>
        <Container>
            {products.map((element,index) => (
                <Product key={index}>
                    <LinkStyle to={`produto/${element.id}`}>
                    <TitleProducts>{element.nome}</TitleProducts>
                    <Imagem src={element.fotos[0].src} />
                </LinkStyle>
                </Product>
            ))}
        </Container>
    </Section>
  )
}

export default Home;