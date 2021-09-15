import './App.css';
// import { css } from '@emotion/react';
// import { useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Memegenerator from './Memegenerator.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Memegenerator />
    </div>
  );
}

export default App;
