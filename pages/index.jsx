import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LinkIcon from '@material-ui/icons/Link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Head from '../src/components/Head';
import Header from '../src/Header';
import NavButtons from '../src/NavButtons';
import Form from '../src/Form';
import FraminghamCalculator from '../src/FraminghamCalculator';
import Footer from '../src/Footer';
import headLang from '../src/i18n/head.json';


const useStyles = makeStyles((theme) => ({
  paperMobile: {
    padding: theme.spacing(3, 3),
    height: 'auto',
    width: '100%',
  },
  paperDesktop: {
    padding: theme.spacing(3, 3),
    width: '90%',
    minHeight: '80vh',
    margin: '5% auto',
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#4689c8',
    textShadow: '1px 1px #005c97',
    '&:hover': {
      background: '#005c97',
    },
  },
}));

function FormSection(props) {
  const { translations } = props;
  const classes = useStyles();
  const [results, setResults] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [formData, saveFormData] = React.useState(false);
  const resultsEl = React.useRef(null);

  const [animationClass, setAnimationClass] = useState(false);

  // Handles data submitted in Form component when Calculate button is pressed
  function datasubmittedHandler(data, trnslations) {
    const calculation = FraminghamCalculator(data, trnslations);

    resultsEl.current.focus();
    saveFormData(data);
    setResults(calculation);
    if (window.innerWidth < 1200) { resultsEl.current.scrollIntoView(); }
    setTimeout(() => setShowResults(true), 500);
    setAnimationClass(true);
  }

  function resetResults() {
    setResults(false);
  }

  function goBack(e) {
    e.preventDefault();
    setAnimationClass(false);
    setTimeout(() => setShowResults(false), 500);
  }

  return (
    <>
      <section className="formsection" ref={resultsEl} id="calc">
        {!showResults
          ? (
            <div className={!animationClass ? 'opening-animation' : 'closing-animation'}>
              <Paper className={`${window.innerWidth > 1199 ? classes.paperDesktop : classes.paperMobile} `}>
                <h2>{translations.datainput.risk_score_calculator}</h2>
                <h5>
                  <a href="https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf" target="_blank" rel="noopener noreferrer">
                    {translations.datainput.using_guidelines}
                    <LinkIcon fontSize="small" />
                  </a>
                </h5>
                <Form
                  datasubmittedHandler={datasubmittedHandler}
                  resetResults={resetResults}
                  translations={translations.datainput}
                  previousData={formData}
                />
              </Paper>
            </div>
          )
          : (
            <div className={animationClass ? 'opening-animation' : 'closing-animation'}>
              <Paper
                className={`${window.innerWidth > 1199
                  ? classes.paperDesktop : classes.paperMobile} ${animationClass.results}`}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={(e) => goBack(e)}
                  className={classes.button}
                  startIcon={<ArrowBackIcon />}
                >
                  <span>Back</span>
                </Button>
                <h2 className="resultsh2">{translations.r3sults.results}</h2>
                <h3>
                  {translations.r3sults.score}
                  :
                  {' '}
                  {results.score}
                </h3>
                <h3>
                  {translations.r3sults.cvd}
                  :
                  {' '}
                  {results.cvd}
                </h3>
                <h3>
                  {translations.r3sults.heartage}
                  :
                  {' '}
                  {results.heartage}
                </h3>
                <h3>
                  {translations.r3sults.risk}
                  :
                  {' '}
                  {results.risklevel}
                </h3>
                <h3>
                  {translations.r3sults.treatment}
                  <br />
                  {results.needstreatment}
                </h3>
              </Paper>
            </div>
          )}
      </section>
      <style jsx>
        {`
          section.formsection h2 {
            color: #4689C8;
            text-align: center;
            margin: 0;
            font-weight: 600;
            text-shadow: 1px 1px #4689c8;
            font-size: 200%;
          }

          section.formsection h2.resultsh2 {
            margin-top: -5%;
          }

          section.formsection h3 {
              color: #4689C8;
              font-weight: 600;
              font-size: 170%;
          }

          section.formsection h5 {
              margin-top: 0px;
              color: #4689C8;
              text-align: center;
              font-weight: 600;
          }

          @media (max-width: 1199px) {
            section.formsection {
              margin-bottom: 30px;
              width: 100%;
            }
          }

          @media (min-width: 1200px) {
            section.formsection {
              min-height: 100%
            }

            section.formsection h2 {
              margin-bottom: -1.5%;
            }
          }
          

          @keyframes flipInX {
            from {
              transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              animation-timing-function: ease-in;
              opacity: 0;
            }
          
            40% {
              transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              animation-timing-function: ease-in;
            }
          
            60% {
              transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
              opacity: 1;
            }
          
            80% {
              transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
            }
          
            to {
              transform: perspective(400px);
            }
          }
          
          @keyframes flipOutX {
            from {
              transform: perspective(400px);
            }
          
            30% {
              transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              opacity: 1;
            }
          
            to {
              transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              opacity: 0;
            }
          }

          .opening-animation {
            backface-visibility: visible !important;
            animation-name: flipInX;
            animation-fill-mode: forwards;
            animation-duration: 0.75s;
          }

          .closing-animation {
            animation-fill-mode: forwards;
            animation-name: flipOutX;
            animation-duration: 0.50s;
            backface-visibility: visible !important;
          }
      `}
      </style>
    </>
  );
}


export default function Index() {
  const router = useRouter();
  const [translations, setTranslations] = React.useState(undefined);
  const language = router.query.lang ? router.query.lang : 'en';

  import(`./../src/i18n/${language}.json`).then((strings) => {
    setTranslations(strings.default);
  });

  return (
    <>
      <Head translations={headLang[language]} />
      {(typeof window !== 'undefined' && translations)
          && (
            <>
              <main>
                <section className="introsection">
                  <Header
                    translations={{
                      briefDescription: translations.brief_description,
                      navbarTitle: translations.navbar_title,
                    }}
                    lang={router.query.lang}
                  />
                  <NavButtons translations={{
                    androidapp: translations.androidapp,
                    calculate: translations.calculate,
                    elinks: translations.elinks,
                    info: translations.info
                  }}
                  />
                </section>
                <FormSection translations={{
                  datainput: {
                    age: translations.age,
                    arterial_pression: translations.arterial_pression,
                    colesterol_hdl: translations.colesterol_hdl,
                    colesterol_ldl: translations.colesterol_ldl,
                    colesterol_total: translations.colesterol_total,
                    diabetes: translations.diabetes,
                    gender: translations.gender,
                    hypertension_in_treatment: translations.hypertension_in_treatment,
                    man: translations.man,
                    risk_score_calculator: translations.risk_score_calculator,
                    smoking: translations.smoking,
                    waist_circumference: translations.waist_circumference,
                    woman: translations.woman,
                    using_guidelines: translations.using_guidelines,
                    calc: {
                      low: translations.low,
                      intermediate: translations.intermediate,
                      high: translations.high
                    },
                  },
                  r3sults: {
                    score: translations.score,
                    cvd: translations.cvd,
                    heartage: translations.heartage,
                    results: translations.results,
                    risk: translations.risk,
                    treatment: translations.treatment
                  }
                }}
                />
              </main>
              <Footer />
            </>
          )}
      <style jsx>
        {`
          p {
            font-family: Lato;
          }

          a:visited {
            color: #4689C8
          }

          main {
            background-color: transparent;
            width: 100%;
            height: auto;
            margin: 0 auto;
            display: flex;
            padding: 0;
            border: 0;
            flex-direction: row;
            justify-content: center;
            overflow: hidden;
          }

          section.introsection {
            background-color: transparent;
            height:auto;
            width: 50%;
            margin: 0;
            padding: 0;
            border: 0;
          }

          @media (max-width: 1199px) {
            main {
              width: 90%;
              margin: 0 auto;
              flex-direction: column;
            }

            main section.introsection {
              margin-bottom: 30px;
              width: 100%;
            }

            .gplay-img {
              width: 100%;
            }
          }
          @media (min-width: 1200px) {
            main {
              min-height: 100vh;
            }

            section.introsection {
              min-height: 100%,
            }
          }
      `}

      </style>
    </>

  );
}
