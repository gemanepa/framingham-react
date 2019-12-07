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
              <div id="app">
                <div id="appintro">
                  <Header
                    translations={{
                      briefDescription: translations.brief_description,
                      navbarTitle: translations.navbar_title,
                    }}
                    lang={language}
                  />
                  <NavButtons translations={{
                    androidapp: translations.androidapp,
                    calculate: translations.calculate,
                    elinks: translations.elinks,
                    info: translations.info
                  }}
                  />
                </div>
                <MainContainer translations={{
                  calcinput: {
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
                    }
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
