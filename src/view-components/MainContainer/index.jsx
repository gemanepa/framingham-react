import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FraminghamCalculator from '../../calclogic-handlers';
import TypeCalcInput from './containerType/calcinput';

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

function containerType(type) {
  const types = {
    calcinput: 'asdf',
    results: 'asdf'
  };
  return types[type];
}

export default function MainContainer(props) {
  const { translations } = props;
  const classes = useStyles();
  const [results, setResults] = React.useState(false);
  const [containerType, setContainerType] = React.useState('calcinput');
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
    setTimeout(() => setContainerType(true), 500);
    setAnimationClass(true);
  }

  // Cleans input fields from data
  function cleanCalcInputs() {
    setResults(false);
  }

  // Goes from results container to calcinput container
  function goBack(e) {
    e.preventDefault();
    setAnimationClass(false);
    setTimeout(() => setContainerType('calcinput'), 500);
  }

  return (
    <>
      <main ref={resultsEl} id="maincontainer">
        {containerType === 'calcinput'
          ? (
            <TypeCalcInput
              animationClass={animationClass}
              classes={classes}
              cleanCalcInputs={cleanCalcInputs}
              datasubmittedHandler={datasubmittedHandler}
              formData={formData}
              translations={translations.calcinput}
            />
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
