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
        <h1>Framingham Risk Score Calculator</h1>
        
        <h3>
         <a href="https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf">
        Using Canadian CardioVascular Society Guidelines
        <LinkIcon />
        </a>
        </h3>

        <br/><br/>


        <Form />

      </>
  );
}

render(<App />, document.getElementById('root'));
