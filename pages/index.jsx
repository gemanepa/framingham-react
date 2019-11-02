import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LinkIcon from '@material-ui/icons/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../src/Header';
import Navbar from '../src/Navbar';
import Form from '../src/Form';
import FraminghamCalculator from '../src/FraminghamCalculator';
import Footer from '../src/Footer';
import headLang from '../src/i18n/head.json';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2.5),
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

      <Navbar />

      {translations.navbar_title && <Header navbarTitle={translations.navbar_title} />}
      <main>
        <section className="formsection">
          <Paper className={classes.root}>
            <h2>{translations.framingham_risk_score_calculator}</h2>
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
              <Paper className={classes.root}>
                <p>{translations.framingham_description}</p>
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
          <Paper className={classes.root}>
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
      <Footer />

      <style jsx>
        {`
      p {
        font-family: Lato;
      }

      body {
        width: 100vw;
        overflow-x: hidden;
        min-height: 100vh;
        height: auto;
        margin: 0;
        padding: 0;
        border: 0;
      }
      #root {
        background-color: transparent;
        color: #4689C8;
        font-weight: 600;
        width: 100%;
        min-height: 100vh;
        height: auto;
      }

      a:visited {
        color: #4689C8
      }

      main {
        width: 90vw;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        min-height: 76vh;
      }

      section.formsection {
        width: 61%;
      }
      section.formsection h2 {
        color: #4689C8;
        text-align: center;
        margin: 0;
      }

      section.formsection h5 {
          margin-top: 0px;
          color: #4689C8;
          text-align: center;
      }

      section.aboutsection {
        width: 30%;
        display: flex;
        flex-direction: column;
      }
      @media (min-width: 1200px) {
        section.aboutsection a {margin-left: 45%;}
      }
      .gplay-img {
        height: auto;
        margin: 0 auto;
        width: 16vw;
      }
      .gplay-img:hover {
        filter: invert(100%) drop-shadow(8px 8px 10px gray);
      }

      @media (max-width: 1199px) {
        main {
          width: 90%;
          margin: 0 auto;
          flex-direction: column;
          justify-content: center;
        }

        section {
          margin-bottom: 30px;
        }
        section.formsection, section.aboutsection {
          width: 100%;
        }

        .gplay-img {
          width: 100%;
        }
      }
      `}

      </style>
    </>

  );
}
