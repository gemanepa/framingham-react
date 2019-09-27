import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [name, setName] = useState('React');
  const [fruta, setFruta] = useState('grapefruit');


  return (
      <div>
        <Hello name={name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <form>
          <select id="frutas" value={fruta} onChange={(event) => setFruta(event.target.value)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </form>
        {fruta}
      </div>
  );
}

render(<App />, document.getElementById('root'));
