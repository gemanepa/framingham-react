import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Hello from './Hello';
import Form from './Form'
import './style.css';

function App() {
  const [name, setName] = useState('React Hooks');
  const [fruta, setFruta] = useState('grapefruit');


  return (
      <>
      <CssBaseline />
        <Hello name={name} />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <br/><br/>

        <form>
          <select id="frutas" value={fruta} onChange={(event) => setFruta(event.target.value)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </form>
        <br/>
        {fruta}
        
        <Form />

      </>
  );
}

render(<App />, document.getElementById('root'));
