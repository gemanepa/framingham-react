import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Form from '../Form';
import FraminghamCalculator from '../../calclogic-handlers';

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

export default function MainContainer(props) {
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
      <main ref={resultsEl} id="maincontainer">
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
      </main>
      <style jsx>
        {`
            main#maincontainer h2 {
              color: #4689C8;
              text-align: center;
              margin: 0;
              font-weight: 600;
              text-shadow: 1px 1px #4689c8;
              font-size: 200%;
            }
  
            main#maincontainer h2.resultsh2 {
              margin-top: -5%;
            }
  
            main#maincontainer h3 {
                color: #4689C8;
                font-weight: 600;
                font-size: 170%;
            }
  
            main#maincontainer h5 {
                margin-top: 0px;
                color: #4689C8;
                text-align: center;
                font-weight: 600;
            }
  
            @media (max-width: 1199px) {
              main#maincontainer {
                margin-bottom: 30px;
                width: 100%;
              }
            }
  
            @media (min-width: 1200px) {
              main#maincontainer {
                min-height: 100%;
                width: 49.5%;
              }
  
              main#maincontainer h2 {
                margin-bottom: -1.5%;
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
