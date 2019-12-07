import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Results(props) {
  const { animationClass, classes, results, translations, goBack } = props;
  return (
    <>
      <section id="results" className={animationClass ? 'opening-animation' : 'closing-animation'}>
        <Paper
          className={`${window.innerWidth > 1199
            ? classes.paperDesktop : classes.paperMobile} ${animationClass.results}`}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={(e) => goBack(e)}
            className={classes.button}
            startIcon={<ArrowBackIcon />}
          >
            <span>Back</span>
          </Button>
          <h2 className="resultsh2">{translations.results}</h2>
          <h3>
            {translations.score}
            :
            {' '}
            {results.score}
          </h3>
          <h3>
            {translations.cvd}
            :
            {' '}
            {results.cvd}
          </h3>
          <h3>
            {translations.heartage}
            :
            {' '}
            {results.heartage}
          </h3>
          <h3>
            {translations.risk}
            :
            {' '}
            {results.risklevel}
          </h3>
          <h3>
            {translations.treatment}
            <br />
            {results.needstreatment}
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
  
            section#results h2.resultsh2 {
              margin-top: -5%;
            }
  
            section#results h3 {
                color: #4689C8;
                font-weight: 600;
                font-size: 170%;
            }
  
            @media (min-width: 1200px) {
              section#results h2 {
                margin-bottom: -1.5%;
              }
            }
            
  
            @keyframes flipOutX {
                from {
                  transform: perspective(400px);
                }
              
                30% {
                  transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
                  opacity: 1;
                }
              
                to {
                  transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
                  opacity: 0;
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
  
            .closing-animation {
              animation-fill-mode: forwards;
              animation-name: flipOutX;
              animation-duration: 0.50s;
              backface-visibility: visible !important;
            }
        `}
      </style>
    </>
  );
}
