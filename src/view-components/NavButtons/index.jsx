import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AndroidIcon from '@material-ui/icons/Android';
import InfoIcon from '@material-ui/icons/Info';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ButtonWithDropdownMenu from './withDropdownMenu';
import useInterval from '../helpers/useIntervalHook';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#4689c8',
    textShadow: '1px 1px #005c97',
    '&:hover': {
      background: '#005c97',
    },
    width: window.innerWidth > 1199 ? '30%' : null,
    cursor: 'pointer'
  },
}));

export default function IconLabelButtons(props) {
  const { containerType, translations } = props;
  const {
    androidapp, calculate, elinks, info
  } = translations;
  const classes = useStyles();

  function translateStringsIteration() {
    const translateStrings = [
      'Translate', // EN - English
      'Traducir', // ES - Spanish
      'Traduzir', // PT - Portuguese
      'Traduire', // FR - French
      'Tradurre', // IT - Italian
      'Traduir', // CA - Catala
      'Übersetzen', // DE - Deutsch
      'Vertaal', // AF - Afrikaans
      'Oversætte' // DA - Danish
      // NL - Nederlands
    ];
    const [count, setCount] = useState(0);

    useInterval(() => {
      if (count === 8) {
        setCount(0);
      } else { setCount(count + 1); }
    }, 5000);
    return translateStrings[count];
  }

  return (
    <>
      <nav className="navbuttons">
        <div className="firstrow">
          {(window.innerWidth < 1200)
          && (
            <>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                href="#maincontainer"
                startIcon={<LocalHospitalIcon />}
                data-test="NavButtons_calcBtn"
                onClick={() => containerType.set('calcinput')}
              >
                <span>{calculate}</span>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                href="#maincontainer"
                startIcon={<InfoIcon />}
                data-test="NavButtons_infoBtn"
                onClick={() => containerType.set('info')}
              >
                <span>{info}</span>
              </Button>
            </>
          )}

          {(window.innerWidth > 1200)
          && (
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={containerType.get !== 'info' ? <InfoIcon /> : <LocalHospitalIcon />}
            data-test={containerType.get !== 'info' ? 'NavButtons_infoBtn' : 'NavButtons_calcBtn'}
            onClick={() => containerType.set(containerType.get !== 'info' ? 'info' : 'calcinput')}
          >
            <span>{containerType.get !== 'info' ? info : calculate}</span>
          </Button>
          )}
          <ButtonWithDropdownMenu
            text={elinks}
            menuType="elinks"
          />
        </div>
        <div className="secondrow">
          <ButtonWithDropdownMenu
            text={translateStringsIteration()}
            menuType="language"
          />

          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<AndroidIcon />}
            data-test="NavButtons_androidappBtn"
            href="https://play.google.com/store/apps/details?id=com.gemanepa.framingham"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>{androidapp}</span>
          </Button>
        </div>
      </nav>
      <style jsx>
        {`
          .navbuttons {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .navbuttons .firstrow, .navbuttons .secondrow {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }

          .anchor, .anchor:visited, .anchor:focus {
            width: auto;
            height: auto;
            text-decoration: none;
            color: inherit;
          }

          @media (max-width: 1199px) {
            .navbuttons .firstrow, .navbuttons .secondrow {
              flex-direction: column;
            }
          }

          @media (min-width: 1200px) {
            .navbuttons span {
              padding-top: 0.125rem;
            }
          }
      `}
      </style>
    </>
  );
}

IconLabelButtons.propTypes = {
  containerType: PropTypes.exact({
    get: PropTypes.string.isRequired,
    set: PropTypes.func.isRequired,
  }).isRequired,
  translations: PropTypes.exact({
    androidapp: PropTypes.string.isRequired,
    calculate: PropTypes.string.isRequired,
    elinks: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired
};
