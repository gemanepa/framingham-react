import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import Head from '../Head';
import Header from '../Header';
import NavButtons from '../NavButtons';
import MainContainer from '../MainContainer';
import Footer from '../Footer';


export default function App(props) {
  const { trs } = props; // Default i18n for each page
  const [translations, setTranslations] = React.useState(trs);

  const router = useRouter(); // i18n switching handler
  const route = router.asPath.includes('#maincontainer') ? router.asPath.replace('#maincontainer', '') : router.asPath;
  const language = route.length > 1 ? route.replace('/', '') : 'en';

  import(`../../i18n/${language}.json`).then((strings) => {
    setTranslations(strings.default);
  });

  const [containerType, setContainerType] = React.useState('calcinput');

  if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test') {
    ReactGA.initialize('UA-157152731-1');
    ReactGA.pageview(route);
  }


  return (
    <>
      <Head translations={translations.head} />
      {(typeof window !== 'undefined' && translations)
          && (
            <>
              <div id="app">
                <div id="appintro">
                  <Header
                    translations={{
                      briefDescription: translations.body.brief_description,
                      navbarTitle: translations.body.navbar_title,
                    }}
                    lang={translations.lang}
                  />
                  <NavButtons
                    containerType={{ get: containerType, set: setContainerType }}
                    lang={translations.lang}
                    translations={{
                      androidapp: translations.body.androidapp,
                      calculate: translations.body.calculate,
                      elinks: translations.body.elinks,
                      info: translations.body.info
                    }}
                  />
                </div>
                <MainContainer
                  containerType={{ get: containerType, set: setContainerType }}
                  translations={{
                    calcinput: {
                      age: translations.body.age,
                      arterial_pression: translations.body.arterial_pression,
                      colesterol_hdl: translations.body.colesterol_hdl,
                      colesterol_ldl: translations.body.colesterol_ldl,
                      colesterol_total: translations.body.colesterol_total,
                      diabetes: translations.body.diabetes,
                      gender: translations.body.gender,
                      genderRequired: translations.body.genderRequired,
                      hypertension_in_treatment: translations.body.hypertension_in_treatment,
                      man: translations.body.man,
                      risk_score_calculator: translations.body.risk_score_calculator,
                      smoking: translations.body.smoking,
                      waist_circumference: translations.body.waist_circumference,
                      woman: translations.body.woman,
                      using_guidelines: translations.body.using_guidelines,
                      calc: {
                        abdominal_aortic_aneurysm: translations.body.abdominal_aortic_aneurysm,
                        age: translations.body.age,
                        alternative_target: translations.body.alternative_target,
                        aterosclerosis: translations.body.aterosclerosis,
                        chronic_kidney_disease: translations.body.chronic_kidney_disease,
                        decrease_in: translations.body.decrease_in,
                        diabetes: translations.body.diabetes,
                        high: translations.body.high,
                        intermediate: translations.body.intermediate,
                        low: translations.body.low,
                        or: translations.body.or,
                        patient_highly_requires_treatment: translations.body.patient_highly_requires_treatment,
                        patient_not_requires_treatment: translations.body.patient_not_requires_treatment,
                        primary_target: translations.body.primary_target,
                        smoking: translations.body.smoking,
                        so_treatment_is_recommended: translations.body.so_treatment_is_recommended,
                        statins_only_indicated: translations.body.statins_only_indicated,
                        treatment_intermediate_hasfactors: translations.body.treatment_intermediate_hasfactors,
                        treatment_intermediate_ldl: translations.body.treatment_intermediate_ldl,
                        treatment_intermediate_norisks: translations.body.treatment_intermediate_norisks,
                        treatment_low_diabetes: translations.body.treatment_low_diabetes,
                        unknown: translations.body.unknown,
                        waist_circumference: translations.body.waist_circumference,
                        years: translations.body.years,
                      },
                      helpers: {
                        'cms(inches)': translations.body['cms(inches)'],
                        mgdl: translations.body.mgdl,
                        mmHg: translations.body.mmHg
                      }
                    },
                    info: {
                      back: translations.body.back,
                      info: translations.body.info,
                      purpose: translations.body.purpose,
                      purpose_text1: translations.body.purpose_text1,
                      purpose_text2: translations.body.purpose_text2,
                      purpose_text3: translations.body.purpose_text3,
                      validation: translations.body.validation,
                      validation_text: translations.body.validation_text,
                      usefulness: translations.body.usefulness,
                      usefulness_text_start: translations.body.usefulness_text_start,
                      usefulness_text_lowrisk: translations.body.usefulness_text_lowrisk,
                      usefulness_text_intermediaterisk: translations.body.usefulness_text_intermediaterisk,
                      usefulness_text_highrisk: translations.body.usefulness_text_highrisk,
                      usefulness_text_end: translations.body.usefulness_text_end
                    },
                    r3sults: {
                      back: translations.body.back,
                      score: translations.body.score,
                      cvd: translations.body.cvd,
                      cvdexplanation: translations.body.cvdexplanation,
                      heartage: translations.body.heartage,
                      results: translations.body.results,
                      risk: translations.body.risk,
                      treatment: translations.body.treatment
                    }
                  }}
                />
              </div>
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

          #app {
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

          #appintro {
            background-color: transparent;
            height:auto;
            width: 50%;
            margin: 0;
            padding: 0;
            border: 0;
          }

          @media (max-width: 1199px) {
            #app {
              width: 90%;
              margin: 0 auto;
              flex-direction: column;
            }

            #app #appintro {
              margin-bottom: 30px;
              width: 100%;
            }

            .gplay-img {
              width: 100%;
            }
          }
          @media (min-width: 1200px) {
            #app {
              min-height: 100vh;
            }

            #appintro {
              min-height: 100%,
            }
          }
        `}
      </style>
    </>

  );
}

App.propTypes = {
  trs: PropTypes.exact({
    lang: PropTypes.string.isRequired,
    head: PropTypes.exact({
      appname: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      keywords: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired,
    body: PropTypes.exact({
      abdominal_aortic_aneurysm: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      androidapp: PropTypes.string.isRequired,
      alternative_target: PropTypes.string.isRequired,
      app_name: PropTypes.string.isRequired,
      arterial_pression: PropTypes.string.isRequired,
      aterosclerosis: PropTypes.string.isRequired,
      back: PropTypes.string.isRequired,
      brief_description: PropTypes.string.isRequired,
      calculate: PropTypes.string.isRequired,
      chronic_kidney_disease: PropTypes.string.isRequired,
      colesterol_hdl: PropTypes.string.isRequired,
      colesterol_ldl: PropTypes.string.isRequired,
      colesterol_total: PropTypes.string.isRequired,
      'cms(inches)': PropTypes.string.isRequired,
      cvd: PropTypes.string.isRequired,
      cvdexplanation: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      decrease_in: PropTypes.string.isRequired,
      diabetes: PropTypes.string.isRequired,
      elinks: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      genderRequired: PropTypes.string.isRequired,
      heartage: PropTypes.string.isRequired,
      high: PropTypes.string.isRequired,
      hypertension_in_treatment: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      intermediate: PropTypes.string.isRequired,
      low: PropTypes.string.isRequired,
      man: PropTypes.string.isRequired,
      mgdl: PropTypes.string.isRequired,
      mmHg: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      navbar_title: PropTypes.string.isRequired,
      or: PropTypes.string.isRequired,
      patient: PropTypes.string.isRequired,
      patient_highly_requires_treatment: PropTypes.string.isRequired,
      patient_name: PropTypes.string.isRequired,
      patient_not_requires_treatment: PropTypes.string.isRequired,
      patientdata: PropTypes.string.isRequired,
      primary_target: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
      purpose_text1: PropTypes.string.isRequired,
      purpose_text2: PropTypes.string.isRequired,
      purpose_text3: PropTypes.string.isRequired,
      results: PropTypes.string.isRequired,
      risk: PropTypes.string.isRequired,
      risk_score_calculator: PropTypes.string.isRequired,
      score: PropTypes.string.isRequired,
      send: PropTypes.string.isRequired,
      smoking: PropTypes.string.isRequired,
      so_treatment_is_recommended: PropTypes.string.isRequired,
      statins_only_indicated: PropTypes.string.isRequired,
      treatment: PropTypes.string.isRequired,
      treatment_intermediate_hasfactors: PropTypes.string.isRequired,
      treatment_intermediate_ldl: PropTypes.string.isRequired,
      treatment_intermediate_norisks: PropTypes.string.isRequired,
      treatment_low_diabetes: PropTypes.string.isRequired,
      unknown: PropTypes.string.isRequired,
      usefulness: PropTypes.string.isRequired,
      usefulness_text_start: PropTypes.string.isRequired,
      usefulness_text_lowrisk: PropTypes.string.isRequired,
      usefulness_text_intermediaterisk: PropTypes.string.isRequired,
      usefulness_text_highrisk: PropTypes.string.isRequired,
      usefulness_text_end: PropTypes.string.isRequired,
      using_guidelines: PropTypes.string.isRequired,
      validation: PropTypes.string.isRequired,
      validation_text: PropTypes.string.isRequired,
      waist_circumference: PropTypes.string.isRequired,
      woman: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      years: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
