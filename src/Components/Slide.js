import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    margin-top: 1rem;
    overflow: hidden;
`;
const ContainerSlide = styled.div`
    display: flex;
    margin-top: 3rem;
`;
const Element = styled.div`
    width: 80%;
    padding: 10rem 0;
    margin: 0 10%;
    flex-shrink: 0;
    background-color: #eee;
    text-align: center;
    transform: ${({pixel}) => `translateX(-${pixel}px)`};
    will-change: transform;
    background-image: url(${({src}) => src});
    background-size: cover;
    background-position: center;
    transition: .3s ease; 
    border-radius: 5px;
`;
const Nav = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
`;
const Arrow = styled.div`/* botão dinamico : pode ser < o >, dependendo das props*/
    width: 20px;
    height: 20px;
    display: inline;
    color: #fff;
    font-weight: bolder;
    background-color: rgba(0,0,0,0.4);
    padding: 2rem;
    cursor: pointer;
    margin-top: -11rem;
    opacity: .5;
    &::after {
        content: '${(props) => props.text}';
        font-size: 1.5rem;
        font-weight: bolder;
    }
    &:hover{
        opacity: 1;
    }
`;
const Slide = ({slides}) => {
  const [active,setActive] = React.useState(0);
  const [pixel,setPixel] = React.useState(null);
  const slide = useRef();
  React.useEffect(() => {
    const {width} = slide.current.getBoundingClientRect();
    setPixel(width * active);
  },[active]);
  const handleAnterior = (event) => {
    if(active > 0)
        setActive(active - 1 );
  }
  const handleProximo = (event) => {
    if( active + 1 < slides.length)
        setActive(active + 1);
  }

  return (
    <Container>
        <ContainerSlide ref={slide}>       
            {slides.map((elemento,indice) => (
                <Element key={indice} pixel={pixel} src={elemento.content}>
                    
                </Element>
            ))}
        </ContainerSlide>
        <Nav>
            <Arrow onClick={handleAnterior} text='<'></Arrow>
            <Arrow onClick={handleProximo} text='>'></Arrow>
        </Nav>
    </Container>
  )
}

export default Slide;