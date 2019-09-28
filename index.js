import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Hello from './Hello';
import Navbar from './Navbar/Navbar.js'
import Form from './Form'
import LinkIcon from '@material-ui/icons/Link';
import './style.css';

function App() {
  const [name, setName] = useState('React Hooks');
  const [fruta, setFruta] = useState('grapefruit');


  return (
      <>
      <CssBaseline />
        <Navbar />
        <header className="appHeader">
          <h1>CardioRiesgo Framingham</h1>
          <h2>Framingham Risk Score Calculator</h2>
          <h5>
          <a href="https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf">
          Using Canadian CardioVascular Society Guidelines
          <LinkIcon fontSize="small" />
          </a>
          </h5>
        </header>


        <br/><br/>
        <main>
          <Form />
        </main>
      </>
  );
}

render(<App />, document.getElementById('root'));
