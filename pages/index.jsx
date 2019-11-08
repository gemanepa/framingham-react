import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LinkIcon from '@material-ui/icons/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../src/Header';
import Navbar from '../src/Navbar';
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
    height: 'auto',
    margin: '5% auto',
  },
}));

export default function Index() {
  const router = useRouter();
  const [translations, setTranslations] = React.useState({});
  let language;
  if (router.query.lang) {
    language = router.query.lang;
  } else { language = 'en'; }

  import(`./../src/i18n/${language}.json`).then((strings) => {
    setTranslations(strings.default);
  });
  const classes = useStyles();
  const [results, setResults] = React.useState(false);
  const resultsEl = React.useRef(null);

  // Handles data submitted in Form componented when Calculate button is pressed
  function datasubmittedHandler(data) {
    const calculation = FraminghamCalculator(data, translations);
    setResults(calculation);
    resultsEl.current.focus();
    if (window.innerWidth < 1200) { resultsEl.current.scrollIntoView(); }
  }

  function resetResults() {
    setResults(false);
  }

  const formTranslations = {
    age: translations.age,
    arterial_pression: translations.arterial_pression,
    colesterol_hdl: translations.colesterol_hdl,
    colesterol_ldl: translations.colesterol_ldl,
    colesterol_total: translations.colesterol_total,
    diabetes: translations.diabetes,
    gender: translations.gender,
    hypertension_in_treatment: translations.hypertension_in_treatment,
    man: translations.man,
    smoking: translations.smoking,
    waist_circumference: translations.waist_circumference,
    woman: translations.woman,
  };

  return (
    <>
      <Head>
        <title>{headLang[language].title}</title>
        <meta name="application-name" content={headLang[language].appname} />
        <meta name="description" content={headLang[language].description} />
        <meta name="keywords" content={headLang[language].keywords} />
      </Head>
      {/*
      <Navbar />

      <main>
        <section className="formsection">
          <Paper className={(window && window.innerWidth > 1199) ? classes.paperDesktop}>
            <h2>{translations.risk_score_calculator}</h2>
            <h5>
              <a href="https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf" target="_blank" rel="noopener noreferrer">
                {translations.using_guidelines}
                <LinkIcon fontSize="small" />
              </a>
            </h5>
            {translations.age && (
            <Form
              datasubmittedHandler={datasubmittedHandler}
              resetResults={resetResults}
              translations={formTranslations}
            />
            )}
          </Paper>
        </section>

        <section ref={resultsEl} className="aboutsection" aria-live="assertive">
          {!results && (
            <>
              <Paper className={(window && window.innerWidth > 1199) ? classes.paperDesktop}>
                <p>{translations.expanded_description}</p>
              </Paper>
              <a href="https://play.google.com/store/apps/details?id=com.gemanepa.framingham" target="_blank" rel="noopener noreferrer">
                <img
                  className="gplay-img"
                  alt="Google Play Android App"
                  src={`https://play.google.com/intl/en_us/badges/static/images/badges/${language}_badge_web_generic.png`}
                />
              </a>
            </>
          )}
          {results && (
          <Paper className={(window && window.innerWidth > 1199) ? classes.paperDesktop}>
            <h3>{translations.results}</h3>
            <p>
              {translations.score}
              :
              {' '}
              {results.score}
            </p>
            <p>
              {translations.cvd}
              :
              {' '}
              {results.cvd}
            </p>
            <p>
              {translations.heartage}
              :
              {' '}
              {results.heartage}
            </p>
            <p>
              {translations.risk}
              :
              {' '}
              {results.risklevel}
            </p>
            <p>
              {translations.treatment}
              :
              {' '}
              {results.needstreatment}
            </p>
          </Paper>
          )}
        </section>
      </main>
      */}

      <main>
        <section className="aboutsection">
          {translations.navbar_title
          && (
          <Header
            navbarTitle={translations.navbar_title}
            briefDescription={translations.brief_description}
          />
          )}
          {typeof window !== 'undefined'
          && <NavButtons />}
        </section>
        <section className="formsection" id="calc">
          {typeof window !== 'undefined'
        && (
        <Paper
          className={(window.innerWidth > 1199) ? classes.paperDesktop : classes.paperMobile}
        >
          <h2>{translations.risk_score_calculator}</h2>
          <h5>
            <a href="https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf" target="_blank" rel="noopener noreferrer">
              {translations.using_guidelines}
              <LinkIcon fontSize="small" />
            </a>
          </h5>
          {translations.age && (
          <Form
            datasubmittedHandler={datasubmittedHandler}
            resetResults={resetResults}
            translations={formTranslations}
          />
          )}
        </Paper>
        )}
        </section>
      </main>
      <Footer />

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
        overflow-x: hidden;
      }

      section.aboutsection {
        background-color: transparent;
        height:auto;
        width: 50%;
        margin: 0;
        padding: 0;
        border: 0;
      }



      section.formsection {
        background-color: transparent;
        height: auto;
        width: 50%;
        margin: 0;
        margin-top: 1%;
        padding: 0;
        border: 0;
      }

      section.formsection h2 {
        color: #4689C8;
        text-align: center;
        margin: 0;
        font-weight: 600;
        text-shadow: 1px 1px #4689c8;
        font-size: 200%;
      }

      section.formsection h5 {
          margin-top: 0px;
          color: #4689C8;
          text-align: center;
          font-weight: 600;
      }

      @media (max-width: 1199px) {
        main {
          width: 90%;
          margin: 0 auto;
          flex-direction: column;
        }

        main section.aboutsection, section.formsection {
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

        section.aboutsection {
          min-height: 100%,
        }

        section.formsection {
          min-height: 100%
        }

        section.formsection h2 {
          margin-bottom: -1.5%;
        }
      }
      `}

      </style>
    </>

  );
}