import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Results(props) {
  const {
    classes, containerType, results, translations
  } = props;

  return (
    <>
      <section id="results" className="opening-animation" data-test="Results_Container">
        <Paper
          className={`${window.innerWidth > 1199
            ? classes.paperDesktop : classes.paperMobile}`}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => containerType.set('calcinput')}
            className={classes.button}
            startIcon={<ArrowBackIcon />}
            href="#maincontainer"
            data-test="Results_Goback"
          >
            <span>{translations.back}</span>
          </Button>
          <h2 className="resultsh2" data-test="Results_Title">{translations.results}</h2>
          <h3 data-test="Results_Score">
            {translations.score}
            :
            {' '}
            {results.score}
          </h3>
          <h3 data-test="Results_CVD">
            {translations.cvd}
            :
            {' '}
            {results.cvd}
            <i data-test="Results_CVDExplained">
              *
              {translations.cvdexplanation}
            </i>
          </h3>
          <h3 data-test="Results_Heartage">
            {translations.heartage}
            :
            {' '}
            {results.heartage}
          </h3>
          <h3 data-test="Results_Risk">
            {translations.risk}
            :
            {' '}
            {results.risklevel}
          </h3>
          <h3 data-test="Results_Treatment">
            {translations.treatment}
            <br />
            {results.needstreatment.split('\n').map((item, i) => <div key={i}>{item}</div>)}
          </h3>
        </Paper>
      </section>
      <style jsx>
        {`
            section#results h2 {
              color: #4689C8;
              text-align: center;
              margin: 0;
              font-weight: 600;
              text-shadow: 1px 1px #4689c8;
              font-size: 200%;
            }
  
            section#results h3 {
                color: #4689C8;
                font-weight: 600;
                font-size: 170%;
            }

            section#results h3 i {
              font-size: 50%;
              float: right;
            }

            @media (min-width: 1200px) {
              section#results h2 {
                margin-bottom: -1.5%;
                margin-top: -5%;
              }

              section#results h3 i {
                margin-top: 3%;
              }
            }

            @media (max-width: 1199px) {
              section#results h2 {
                margin-top: 2%;
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
        `}
      </style>
    </>
  );
}

Results.propTypes = {
  classes: PropTypes.exact({
    button: PropTypes.string.isRequired,
    paperDesktop: PropTypes.string.isRequired,
    paperMobile: PropTypes.string.isRequired,
  }).isRequired,
  containerType: PropTypes.exact({
    get: PropTypes.string.isRequired,
    set: PropTypes.func.isRequired,
  }).isRequired,
  results: PropTypes.exact({
    cvd: PropTypes.string,
    heartage: PropTypes.string,
    needstreatment: PropTypes.string,
    risklevel: PropTypes.string,
    score: PropTypes.number
  }).isRequired,
  translations: PropTypes.exact({
    score: PropTypes.string.isRequired,
    cvd: PropTypes.string.isRequired,
    heartage: PropTypes.string.isRequired,
    results: PropTypes.string.isRequired,
    risk: PropTypes.string.isRequired,
    treatment: PropTypes.string.isRequired
  }).isRequired
};
