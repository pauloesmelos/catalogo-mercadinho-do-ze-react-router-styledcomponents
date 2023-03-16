import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contato from './Contato';
import Home from './Home';
import Produto from './Produto';
import Sobre from './Sobre';
import React from 'react';
import Modal from './Components/Modal';

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header text='Mercadinho do Zé' />
        <div className='corpo'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='contato' element={<Contato />} />
            <Route path='sobre' element={<Sobre />} />
            <Route path='/produto/:id' element={<Produto/>} />
          </Routes>
        </div>
        <Footer text="&copy; 2023 - Todos os direitos reservados - ALFENAS MG - MERCADINHO DO ZÉ LTDA - CNPJ: 12.657.111/00008" />
        <Modal />
      </BrowserRouter>
    </div>
  );
}

export default App;