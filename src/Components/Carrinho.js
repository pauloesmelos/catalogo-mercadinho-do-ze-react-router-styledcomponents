import React from 'react';
import styled from 'styled-components';
const Container = styled.section`
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
    width: 40%;
`;
const Mais = styled.button`
    color: #fff;
    background-color: #3ef54e;
    font-size: 1.5rem;
    border: none;
    padding: 1rem;
    cursor: pointer;
    &:hover{
        opacity: .5;
    }
`;
const Menos = styled.button`
    color: #fff;
    background-color: tomato;
    font-size: 1.5rem;
    border: none;
    padding: 1rem;
    cursor: pointer;
    &:hover{
        opacity: .5;
    }
`;
const Quantidade = styled.span`
    font-size: 1.5rem;
    color: #444;
    line-height: 4rem;
`;
const reducer = (state,valueDispatch) => {
    switch(valueDispatch){
        case "menos":
            if(state - 1 > 0)
                return state - 1;
            else
                return state = 0;
        case "mais":
            return state + 1;
        default:
            new Error("Erro - valor de disparo não definido");
    }
};

const Carrinho = () => {
    const [state,dispatch] = React.useReducer(reducer,0);
    React.useEffect(() => {
        console.log(state);
    },[state]);
  return (
    <Container>
        <Menos onClick={() => dispatch("menos")}>-</Menos>
        <Quantidade>{state}</Quantidade>
        <Mais onClick={() => dispatch("mais")}>+</Mais>
    </Container>
  )
}

export default Carrinho;