import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg'

function App() {

  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post('/sessions', { email });
    
    const { _id } = res.data;
    
    localStorage.setItem('user', _id);
  }
  
  return (
    <div className='container'>
      <img src={logo} alt='AirCnC' />

      <div className='content'>
        <p>
          Ofereça <strong>spots</strong> para programadorese e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>E-MAIL * </label>
          <input 
            id='email' 
            type='email'
            placeholder='Seu melhor e-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button 
            type='submit'
            className='btn'
          >Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
