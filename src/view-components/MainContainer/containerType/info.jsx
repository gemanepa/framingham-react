import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Info(props) {
  const { classes, containerType } = props;

  return (
    <>
      <section id="info" className="opening-animation">
        <Paper className={`${window.innerWidth > 1199 ? classes.paperDesktop : classes.paperMobile} `}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => containerType.set('calcinput')}
            className={classes.button}
            startIcon={<ArrowBackIcon />}
          >
            <span>Back</span>
          </Button>
          <h2>ASDF</h2>
          <h5>
            LALALALALLALA
          </h5>
        </Paper>
      </section>
      <style jsx>
        {`
            section#info h2 {
              color: #4689C8;
              text-align: center;
              margin: 0;
              font-weight: 600;
              text-shadow: 1px 1px #4689c8;
              font-size: 200%;
            }
  
            section#info h3 {
                color: #4689C8;
                font-weight: 600;
                font-size: 170%;
            }
  
            section#info h5 {
                margin-top: 0px;
                color: #4689C8;
                text-align: center;
                font-weight: 600;
            }
            
            @media (min-width: 1200px) {
              section#info h2 {
                  margin-bottom: -1.5%;
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

Info.propTypes = {
  classes: PropTypes.exact({
    button: PropTypes.string.isRequired,
    paperDesktop: PropTypes.string.isRequired,
    paperMobile: PropTypes.string.isRequired,
  }).isRequired,
  containerType: PropTypes.exact({
    get: PropTypes.string.isRequired,
    set: PropTypes.func.isRequired,
  }).isRequired,
};