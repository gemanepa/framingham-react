import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './../src/Header'
import Navbar from './../src/Navbar'
import Form from './../src/Form'
import Footer from './../src/Footer'
import LinkIcon from '@material-ui/icons/Link';
import Paper from '@material-ui/core/Paper';
import FraminghamCalculator from '../src/FraminghamCalculator'
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2.5),
  },
}));

export default function Index() {
  const router = useRouter();
  let [translations, setTranslations] = React.useState({})
  let language; router.query.lang ? language = router.query.lang : language = 'en'

  import(`./../src/i18n/${language}.js`).then(strings => {
    setTranslations(strings.default)
  });

  const classes = useStyles();
  const [results, setResults] = React.useState(false);
  const resultsEl = React.useRef(null);

  // Handles data submitted in Form componented when Calculate button is pressed
  function datasubmittedHandler(data){
    const calculation = FraminghamCalculator(data);
    setResults(calculation);
    resultsEl.current.focus();
    window.innerWidth < 1200 && resultsEl.current.scrollIntoView();
  }

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Header headerTitle={translations.headerTitle} />

      <main>
        <section className="formsection">
          <Paper className={classes.root}>
            <h2>Framingham Risk Score Calculator</h2>
            <h5>
              <a href="https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf" target="_blank" rel="noopener noreferrer">
              Using 2017 Canadian CardioVascular Society Guidelines
              <LinkIcon fontSize="small" />
              </a>
            </h5>
            <Form datasubmittedHandler={datasubmittedHandler} />
          </Paper>
        </section>

        <section ref={resultsEl} className="aboutsection" aria-live='assertive'>
          {!results &&<Paper className={classes.root}>
            <p>
            The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years, assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk. It also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the variation of years between it and its chronological age.
            </p>
          </Paper>}
          {results && <Paper className={classes.root} >
          <h3>Results</h3>
            <p>Score: {results.score}</p>
            <p>CVD: {results.cvd}</p>
            <p>Heart Age: {results.heartage} years old</p>
            <p>Risk Level: {results.risklevel}</p>
            <p>Treatment: {results.needstreatment}</p>
          </Paper>}
        </section>
      </main>
      < Footer />

      <style jsx>{`
      p {
        font-family: Lato;
      }

      body {
        width: 100vw;
        overflow-x: hidden;
        min-height: 100vh;
        height: auto;
        margin: 0;
        padding: 0;
        border: 0;
      }
      #root {
        background-color: transparent;
        color: #4689C8;
        font-weight: 600;
        width: 100%;
        min-height: 100vh;
        height: auto;
      }

      a:visited {
        color: #4689C8
      }

      main {
        width: 90vw;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        min-height: 76vh;
      }

      section.formsection {
        width: 61%;
      }
      section.formsection h2 {
        color: #4689C8;
        text-align: center;
        margin: 0;
      }

      section.formsection h5 {
          margin-top: 0px;
          color: #4689C8;
          text-align: center;
      }

      section.aboutsection {
        width: 30%;
      }


      @media (max-width: 1199px) {
        main {
          width: 90%;
          margin: 0 auto;
          flex-direction: column;
          justify-content: center;
        }

        section {
          margin-bottom: 30px;
        }
        section.formsection, section.aboutsection {
          width: 100%;
        }
      }
      `}</style>
    </>

  );
}
