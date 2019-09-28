import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Hello from './Hello';
import Navbar from './Navbar'
import Form from './Form'
import Footer from './Footer'
import LinkIcon from '@material-ui/icons/Link';
import Paper from '@material-ui/core/Paper';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function App() {
  const classes = useStyles();
  const [name, setName] = useState('React Hooks');
  const [fruta, setFruta] = useState('grapefruit');

  return (
      <>
      <CssBaseline />
        <Navbar />
        
          <header className="appHeader">
            <h1>CardioRiesgo Framingham</h1>
          </header>


          {window.innerWidth < 1200 && <br/>}

            <main>
              <section className="formsection">
                <Paper className={classes.root}>
                  <h2>Framingham Risk Score Calculator</h2>
                  <h5>
                    <a href="https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf" target="_blank" rel="noreferrer">
                    Using 2017 Canadian CardioVascular Society Guidelines
                    <LinkIcon fontSize="small" />
                    </a>
                  </h5>
                  <Form />
                </Paper>
              </section>

              <section className="aboutsection">
                <Paper className={classes.root}>
                  <p>
                  The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.
                  </p>
                </Paper>
              </section>
            </main>
          < Footer />
      </>
  );
}

render(<App />, document.getElementById('root'));
