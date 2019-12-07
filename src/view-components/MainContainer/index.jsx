import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FraminghamCalculator from '../../calclogic-handlers';
import TypeCalcInput from './containerType/calcinput';
import TypeResults from './containerType/results';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#4689c8',
    textShadow: '1px 1px #005c97',
    '&:hover': {
      background: '#005c97',
    },
  },
  paperDesktop: {
    padding: theme.spacing(3, 3),
    width: '90%',
    minHeight: '80vh',
    margin: '5% auto',
  },
  paperMobile: {
    padding: theme.spacing(3, 3),
    height: 'auto',
    width: '100%',
  }
}));


export default function MainContainer(props) {
  const { translations } = props;
  const classes = useStyles();
  const [results, setResults] = React.useState({});
  const [containerType, setContainerType] = React.useState('calcinput');
  const [formData, saveFormData] = React.useState(false);
  const mainContainer = React.useRef(null);

  const [animationClass, setAnimationClass] = useState(false);

  // Handles data submitted in Form component when Calculate button is pressed
  function datasubmittedHandler(data, trnslations) {
    const calculation = FraminghamCalculator(data, trnslations);

    mainContainer.current.focus();
    saveFormData(data);
    setResults(calculation);
    if (window.innerWidth < 1200) { mainContainer.current.scrollIntoView(); }
    setTimeout(() => setContainerType('results'), 500);
    setAnimationClass(true);
  }


  /* Cleans input fields from data */
  function cleanCalcInputs() {
    setResults(false);
  }


  /* Handles coming back from results container to calcinput container
  @param e: event object */
  function goBack(e) {
    e.preventDefault();
    setAnimationClass(false);
    setTimeout(() => setContainerType('calcinput'), 500);
  }


  /* Handles which containerType to render depending of containerType state
  @param type: "calcinput" || "results"
  @returns React Component: <TypeCalcInput /> || <TypeResults /> */
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
      <main ref={mainContainer} id="maincontainer">
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

MainContainer.propTypes = {
  translations: PropTypes.exact({
    calcinput: PropTypes.exact({
      age: PropTypes.string.isRequired,
      arterial_pression: PropTypes.string.isRequired,
      colesterol_hdl: PropTypes.string.isRequired,
      colesterol_ldl: PropTypes.string.isRequired,
      colesterol_total: PropTypes.string.isRequired,
      diabetes: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      hypertension_in_treatment: PropTypes.string.isRequired,
      man: PropTypes.string.isRequired,
      risk_score_calculator: PropTypes.string.isRequired,
      smoking: PropTypes.string.isRequired,
      waist_circumference: PropTypes.string.isRequired,
      woman: PropTypes.string.isRequired,
      using_guidelines: PropTypes.string.isRequired,
      calc: PropTypes.exact({
        low: PropTypes.string.isRequired,
        intermediate: PropTypes.string.isRequired,
        high: PropTypes.string.isRequired
      }).isRequired,
    }).isRequired,
    r3sults: PropTypes.exact({
      score: PropTypes.string.isRequired,
      cvd: PropTypes.string.isRequired,
      heartage: PropTypes.string.isRequired,
      results: PropTypes.string.isRequired,
      risk: PropTypes.string.isRequired,
      treatment: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
