import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FraminghamCalculator from '../../calclogic-handlers';
import TypeCalcInput from './containerType/calcinput';
import TypeResults from './containerType/results';

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
    setTimeout(() => setContainerType('results'), 500);
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

  function containerTypeHandler(type) {
    const types = {
      calcinput: (
        <TypeCalcInput
          animationClass={animationClass}
          classes={classes}
          cleanCalcInputs={cleanCalcInputs}
          datasubmittedHandler={datasubmittedHandler}
          formData={formData}
          translations={translations.calcinput}
        />
      ),
      results: (
        <TypeResults
          animationClass={animationClass}
          classes={classes}
          goBack={goBack}
          results={results}
          translations={translations.r3sults}
        />
      )
    };
    return types[type];
  }

  return (
    <>
      <main ref={resultsEl} id="maincontainer">
        {containerTypeHandler(containerType)}
      </main>
      <style jsx>
        {`
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
            }
        `}
      </style>
    </>
  );
}
