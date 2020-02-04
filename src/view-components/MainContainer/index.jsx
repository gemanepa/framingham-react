import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FraminghamCalculator from '../../calclogic-handlers';
import TypeCalcInput from './containerType/calcinput';
import TypeResults from './containerType/results';
import TypeInfo from './containerType/info';


export default function MainContainer(props) {
  const { translations, containerType } = props;

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
      padding: containerType.get === 'results' ? '2.25rem 2rem 2.25rem 2rem' : '1.25rem 1rem 1.75rem 1rem',
      minHeight: '72vh',
      marginTop: '5vh',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginLeft: '0%',
      width() {
        if (containerType.get === 'calcinput') {
          return '87%';
        } if (containerType.get === 'results') {
          return '94%';
        } return '92%';
      }
    },
    paperMobile: {
      padding: theme.spacing(3, 3),
      height: 'auto',
      width: '100%',
    }
  }));

  const classes = useStyles();
  const [results, setResults] = React.useState({});
  const [formData, saveFormData] = React.useState(false);
  const mainContainer = React.useRef(null);

  // Handles data submitted in Form component when Calculate button is pressed
  function datasubmittedHandler(data, trnslations) {
    const calculation = FraminghamCalculator(data, trnslations);

    mainContainer.current.focus();
    saveFormData(data);
    setResults(calculation);
    if (window.innerWidth < 1200) { mainContainer.current.scrollIntoView(); }
    setTimeout(() => containerType.set('results'), 500);
  }


  /* Cleans input fields from data */
  function cleanCalcInputs() {
    setResults(false);
  }


  /* Handles which containerType to render depending of containerType state
  @param type: "calcinput" || "results"
  @returns React Component: <TypeCalcInput /> || <TypeResults /> */
  function containerTypeHandler(type) {
    const types = {
      calcinput: (
        <TypeCalcInput
          classes={classes}
          cleanCalcInputs={cleanCalcInputs}
          datasubmittedHandler={datasubmittedHandler}
          formData={formData}
          translations={translations.calcinput}
        />
      ),
      results: (
        <TypeResults
          classes={classes}
          containerType={containerType}
          results={results}
          translations={translations.r3sults}
        />
      ),
      info: (
        <TypeInfo
          classes={classes}
          containerType={containerType}
          translations={translations.info}
        />
      )
    };
    return types[type];
  }

  return (
    <>
      <main ref={mainContainer} id="maincontainer">
        {containerTypeHandler(containerType.get)}
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
                width: 50%;
              }
            }
        `}
      </style>
    </>
  );
}

MainContainer.propTypes = {
  containerType: PropTypes.exact({
    get: PropTypes.string.isRequired,
    set: PropTypes.func.isRequired,
  }).isRequired,
  translations: PropTypes.exact({
    calcinput: PropTypes.exact({
      age: PropTypes.string.isRequired,
      arterial_pression: PropTypes.string.isRequired,
      colesterol_hdl: PropTypes.string.isRequired,
      colesterol_ldl: PropTypes.string.isRequired,
      colesterol_total: PropTypes.string.isRequired,
      diabetes: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      genderRequired: PropTypes.string.isRequired,
      hypertension_in_treatment: PropTypes.string.isRequired,
      man: PropTypes.string.isRequired,
      risk_score_calculator: PropTypes.string.isRequired,
      smoking: PropTypes.string.isRequired,
      waist_circumference: PropTypes.string.isRequired,
      woman: PropTypes.string.isRequired,
      using_guidelines: PropTypes.string.isRequired,
      calc: PropTypes.exact({
        abdominal_aortic_aneurysm: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        alternative_target: PropTypes.string.isRequired,
        aterosclerosis: PropTypes.string.isRequired,
        chronic_kidney_disease: PropTypes.string.isRequired,
        decrease_in: PropTypes.string.isRequired,
        diabetes: PropTypes.string.isRequired,
        high: PropTypes.string.isRequired,
        intermediate: PropTypes.string.isRequired,
        low: PropTypes.string.isRequired,
        or: PropTypes.string.isRequired,
        patient_highly_requires_treatment: PropTypes.string.isRequired,
        patient_not_requires_treatment: PropTypes.string.isRequired,
        primary_target: PropTypes.string.isRequired,
        smoking: PropTypes.string.isRequired,
        so_treatment_is_recommended: PropTypes.string.isRequired,
        statins_only_indicated: PropTypes.string.isRequired,
        treatment_intermediate_hasfactors: PropTypes.string.isRequired,
        treatment_intermediate_ldl: PropTypes.string.isRequired,
        treatment_intermediate_norisks: PropTypes.string.isRequired,
        treatment_low_diabetes: PropTypes.string.isRequired,
        unknown: PropTypes.string.isRequired,
        waist_circumference: PropTypes.string.isRequired,
        years: PropTypes.string.isRequired
      }).isRequired,
      helpers: PropTypes.exact({
        'cms(inches)': PropTypes.string.isRequired,
        mgdl: PropTypes.string.isRequired,
        mmHg: PropTypes.string.isRequired
      }).isRequired,
    }).isRequired,
    info: PropTypes.exact({
      back: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
      purpose_text1: PropTypes.string.isRequired,
      purpose_text2: PropTypes.string.isRequired,
      purpose_text3: PropTypes.string.isRequired,
      validation: PropTypes.string.isRequired,
      validation_text: PropTypes.string.isRequired,
      usefulness: PropTypes.string.isRequired,
      usefulness_text_start: PropTypes.string.isRequired,
      usefulness_text_lowrisk: PropTypes.string.isRequired,
      usefulness_text_intermediaterisk: PropTypes.string.isRequired,
      usefulness_text_highrisk: PropTypes.string.isRequired,
      usefulness_text_end: PropTypes.string.isRequired
    }).isRequired,
    r3sults: PropTypes.exact({
      back: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
      cvd: PropTypes.string.isRequired,
      cvdexplanation: PropTypes.string.isRequired,
      heartage: PropTypes.string.isRequired,
      results: PropTypes.string.isRequired,
      risk: PropTypes.string.isRequired,
      treatment: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
