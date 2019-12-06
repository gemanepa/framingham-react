import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AndroidIcon from '@material-ui/icons/Android';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import TranslateIcon from '@material-ui/icons/Translate';
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
  },
}));

export default function IconLabelButtons(props) {
  const { translations } = props;
  const {
    androidapp, calculate, elinks, info
  } = translations;
  const classes = useStyles();

  function translateStringsIteration() {
    const translateStrings = ['Translate', 'Traducir', 'Translate', 'Traducir'];
    const [count, setCount] = useState(0);

    useInterval(() => {
      if (count === 3) {
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
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            href="#maincontainer"
            startIcon={<LocalHospitalIcon />}
            data-test="NavButtons_calculate"
          >
            <span>{calculate}</span>
          </Button>
          )}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<InfoIcon />}
            data-test="NavButtons_info"
          >
            <span>{info}</span>
          </Button>
          <ButtonWithDropdownMenu
            text={elinks}
            starticon={<ExitToAppIcon />}
            menuType="elinks"
          />
        </div>
        <div className="secondrow">
          <ButtonWithDropdownMenu
            text={translateStringsIteration()}
            starticon={<TranslateIcon />}
            menuType="language"
          />

          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<AndroidIcon />}
            data-test="NavButtons_androidapp"
          >
            <a href="https://play.google.com/store/apps/details?id=com.gemanepa.framingham" className="anchor">
              <span>{androidapp}</span>
            </a>
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
      `}
      </style>
    </>
  );
}

IconLabelButtons.defaultProps = {
  translations: {}
};

IconLabelButtons.propTypes = {
  translations: {
    androidapp: PropTypes.string.isRequired,
    calculate: PropTypes.string.isRequired,
    elinks: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }
};
