import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import Paper from '@material-ui/core/Paper';
import Form from '../../Form';

export default function CalcInput(props) {
  const {
    animationClass, classes, cleanCalcInputs, datasubmittedHandler, formData, translations
  } = props;
  return (
    <>
      <section id="calcinput" className={!animationClass ? 'opening-animation' : 'closing-animation'}>
        <Paper className={`${window.innerWidth > 1199 ? classes.paperDesktop : classes.paperMobile} `}>
          <h2>{translations.risk_score_calculator}</h2>
          <h5>
            <a href="https://www.ccs.ca/images/Guidelines/Tools_and_Calculators_En/FRS_eng_2017_fnl1.pdf" target="_blank" rel="noopener noreferrer">
              {translations.using_guidelines}
              <LinkIcon fontSize="small" />
            </a>
          </h5>
          <Form
            datasubmittedHandler={datasubmittedHandler}
            cleanCalcInputs={cleanCalcInputs}
            translations={translations}
            previousData={formData}
          />
        </Paper>
      </section>
      <style jsx>
        {`
            section#calcinput h2 {
              color: #4689C8;
              text-align: center;
              margin: 0;
              font-weight: 600;
              text-shadow: 1px 1px #4689c8;
              font-size: 200%;
            }
  
            section#calcinput h3 {
                color: #4689C8;
                font-weight: 600;
                font-size: 170%;
            }
  
            section#calcinput h5 {
                margin-top: 0px;
                color: #4689C8;
                text-align: center;
                font-weight: 600;
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
