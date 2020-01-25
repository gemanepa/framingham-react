import React from 'react';
import { useRouter } from 'next/router';
import Head from '../src/view-components/Head';
import Header from '../src/view-components/Header';
import NavButtons from '../src/view-components/NavButtons';
import MainContainer from '../src/view-components/MainContainer';
import Footer from '../src/view-components/Footer';
import headLang from '../src/i18n/head.json';


export default function Index() {
  const router = useRouter();
  const [translations, setTranslations] = React.useState(false);
  const [containerType, setContainerType] = React.useState('calcinput');
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
              <div id="app">
                <div id="appintro">
                  <Header
                    translations={{
                      briefDescription: translations.brief_description,
                      navbarTitle: translations.navbar_title,
                    }}
                    lang={language}
                  />
                  <NavButtons
                    containerType={{ get: containerType, set: setContainerType }}
                    translations={{
                      androidapp: translations.androidapp,
                      calculate: translations.calculate,
                      elinks: translations.elinks,
                      info: translations.info
                    }}
                  />
                </div>
                <MainContainer
                  containerType={{ get: containerType, set: setContainerType }}
                  translations={{
                    calcinput: {
                      age: translations.age,
                      arterial_pression: translations.arterial_pression,
                      colesterol_hdl: translations.colesterol_hdl,
                      colesterol_ldl: translations.colesterol_ldl,
                      colesterol_total: translations.colesterol_total,
                      diabetes: translations.diabetes,
                      gender: translations.gender,
                      genderRequired: translations.genderRequired,
                      hypertension_in_treatment: translations.hypertension_in_treatment,
                      man: translations.man,
                      risk_score_calculator: translations.risk_score_calculator,
                      smoking: translations.smoking,
                      waist_circumference: translations.waist_circumference,
                      woman: translations.woman,
                      using_guidelines: translations.using_guidelines,
                      calc: {
                        abdominal_aortic_aneurysm: translations.abdominal_aortic_aneurysm,
                        age: translations.age,
                        alternative_target: translations.alternative_target,
                        aterosclerosis: translations.aterosclerosis,
                        chronic_kidney_disease: translations.chronic_kidney_disease,
                        decrease_in: translations.decrease_in,
                        diabetes: translations.diabetes,
                        high: translations.high,
                        intermediate: translations.intermediate,
                        low: translations.low,
                        or: translations.or,
                        patient_highly_requires_treatment: translations.patient_highly_requires_treatment,
                        patient_not_requires_treatment: translations.patient_not_requires_treatment,
                        primary_target: translations.primary_target,
                        smoking: translations.smoking,
                        so_treatment_is_recommended: translations.so_treatment_is_recommended,
                        statins_only_indicated: translations.statins_only_indicated,
                        treatment_intermediate_hasfactors: translations.treatment_intermediate_hasfactors,
                        treatment_intermediate_ldl: translations.treatment_intermediate_ldl,
                        treatment_intermediate_norisks: translations.treatment_intermediate_norisks,
                        treatment_low_diabetes: translations.treatment_low_diabetes,
                        unknown: translations.unknown,
                        waist_circumference: translations.waist_circumference,
                        years: translations.years
                      }
                    },
                    info: {
                      back: translations.back,
                      purpose: translations.purpose,
                      purpose_text1: translations.purpose_text1,
                      purpose_text2: translations.purpose_text2,
                      purpose_text3: translations.purpose_text3,
                      validation: translations.validation,
                      validation_text: translations.validation_text,
                      usefulness: translations.usefulness,
                      usefulness_text_start: translations.usefulness_text_start,
                      usefulness_text_lowrisk: translations.usefulness_text_lowrisk,
                      usefulness_text_intermediaterisk: translations.usefulness_text_intermediaterisk,
                      usefulness_text_highrisk: translations.usefulness_text_highrisk,
                      usefulness_text_end: translations.usefulness_text_end
                    },
                    r3sults: {
                      back: translations.back,
                      score: translations.score,
                      cvd: translations.cvd,
                      heartage: translations.heartage,
                      results: translations.results,
                      risk: translations.risk,
                      treatment: translations.treatment
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
