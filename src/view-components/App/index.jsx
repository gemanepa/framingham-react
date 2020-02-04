import React from 'react';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import Head from '../Head';
import Header from '../Header';
import NavButtons from '../NavButtons';
import MainContainer from '../MainContainer';
import Footer from '../Footer';


export default function Index(props) {
  const { trs } = props; // Default i18n for each page
  const [translations, setTranslations] = React.useState(trs);

  const router = useRouter(); // i18n switching handler
  const route = router.asPath.includes('#maincontainer') ? router.asPath.replace('#maincontainer', '') : router.asPath;
  const language = route.length > 1 ? route.replace('/', '') : 'en';
  if (typeof window !== 'undefined') { window.lang = language; }
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
