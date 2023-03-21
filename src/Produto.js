import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ButtonComprar from './Components/ButtonComprar';
import Carrinho from './Components/Carrinho';
import { smartphone } from './Components/Header';
import { goTop } from './Home';

const rotate = keyframes`
  from{
    opacity: 0;
    transform: rotate(0);
  }
  to{
    opacity: 1;
    transform: rotate(180deg);
  }
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 1rem;
  gap: 4rem;
  margin: 5rem auto;
  width: 80%;

  @media (max-width: ${smartphone}) {
    max-width: 100%;
  }
  @media (max-width: 444px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const DivProduct = styled.div`

`;
const DivImages = styled.div`
`;
const ImgProduct = styled.img`
  max-width: 55rem;
  height: 30rem;
  display: block;
  margin-top: 1rem;

  @media (max-width: ${smartphone}) {
    max-width: 55rem;
    height: 20rem;
  }

`;
const PriceProduct = styled.span`
  padding: .5rem;
  background-color: #4aae71;
  color: #fff;
  font-weight: bolder;
  border-radius: 10px;
`;
const NameProduct = styled.h2`
  color: #444;
  margin-bottom: 2rem;
  &::before{
    content: '';
    display: inline-block;
    border-bottom: 12px solid #444;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin-right: .5rem;
  }
`;
const Description = styled.h4`
  word-spacing: 1rem;
  color: #444;
  margin-top: 2.5rem;
`;
export const ParagraphDescription = styled.p`
  color: #888;
  margin-top: .5rem;
`;
const ParagraphDl = styled.p`
  color: #888;
  margin-top: .5rem;
`;
const DivDl = styled.div``;
const Dl = styled.dl``;
const Dd = styled.dd`
  display: none;
`;
const Dt = styled.dt`
  display: flex;
  cursor: pointer;
  word-spacing: 1rem;
  color: #444;
  font-weight: bolder;
  margin-top: 3.5rem;
  &::after{
    content: '▼';
    margin: 0 0 0 1rem;
    width: 15px;
    height: 15px;
    /*usar props active pra rodar o content */
  }
  &.ativo + ${Dd} {/*setando estilo no dd de acordo com a classe de dt*/
    display: block;
  }
  &.ativo::after{/*seta estilo no after caso o Dt tenha a classe .ativo */
    animation: .3s ${rotate} forwards;
  }
`;

const Produto = () => {

  //console.log(document.querySelector('.sc-jdHJyC'));
  const {id} = useParams();
  const [product,setProduct] = React.useState(null);
  const [loading,setLoading] = React.useState(false);
  const [erro,setErro] = React.useState(null);
  const dtitles = useRef([]);
  const addDtitle = (elemento) => {dtitles.current.push(elemento)};

  React.useEffect(() => {
    if(dtitles.current.length !== null && !loading)
      dtitles.current.forEach(e => {
        if(product && e !== null && !loading)
          e.addEventListener('click',() => {e.classList.toggle('ativo')})
      })
  },[loading,product]);//atenção: os dts só são renderizados após o fetch de produtos, colocar depencia no array
  //para renderizar de novo no fim do fetch

  //lembrando: com useRef não precisamos usar o getElementById ou querySelector

  async function fetchProduto(url){
    try{
      setLoading(true);
      const response = await fetch(url);
      const body = await response.json();
      setProduct(body);
    }
    catch(erro){
      setErro(erro);
    }
    finally{
      setLoading(false);
    }
  }
  React.useEffect(() => {
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    goTop();
  },[id]);
  //colocar o segundo useEffect após o primeiro do fetch
  //pois o segundo usa componentes criados pelo primeiro (fetch de produtos !!!!!!!!!!!!)

  if(loading)
    return <div className='loading'></div>
  if(erro)
    return <p>{erro}</p>
  if(product === null)
    return null;
  
  return (
    <Container className='top '>
      <DivImages>
            <ImgProduct src={product.fotos[0].src} alt={product.titulo}/>
      </DivImages>  
      <DivProduct>
        <NameProduct>{product.nome}</NameProduct>
        <PriceProduct>R$ {product.preco}</PriceProduct>
        <Description>Descrição do produto:</Description>
        <ParagraphDescription>{product.descricao}</ParagraphDescription>
        <DivDl>
          <Dl>
            <Dt ref={addDtitle}>Adicionais</Dt>
            <Dd>
              <ParagraphDl>Produto exclusivo no Zé</ParagraphDl>
            </Dd>
            <Dt ref={addDtitle}>Peso</Dt>
            <Dd>
              <ParagraphDl>Não definido pelo vendedor</ParagraphDl>
            </Dd>
            <Dt ref={addDtitle}>Localização</Dt>
            <Dd>
              <ParagraphDl>Unidade Alfenas - Rua das Avenidas</ParagraphDl>
            </Dd>
          </Dl>
        </DivDl>
        <Carrinho id={id} />
        <ButtonComprar marginTop={"3rem"} text={"Comprar"} />
      </DivProduct>
    </Container>
  )
}

export default Produto;