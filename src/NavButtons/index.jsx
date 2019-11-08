import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AndroidIcon from '@material-ui/icons/Android';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import TranslateIcon from '@material-ui/icons/Translate';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ButtonWithDropdownMenu from './withDropdownMenu';

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

export default function IconLabelButtons() {
  const classes = useStyles();

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
            href="#calc"
            startIcon={<LocalHospitalIcon />}
          >
            <span>Calculate</span>
          </Button>
          )}
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<InfoIcon />}
          >
            <span>Info</span>
          </Button>
          <ButtonWithDropdownMenu text="Elinks" starticon={<ExitToAppIcon />} menuType="elinks" />
        </div>
        <div className="secondrow">
          <ButtonWithDropdownMenu text="Traducir" starticon={<TranslateIcon />} menuType="language" />

          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<AndroidIcon />}
          >
            <a href="https://play.google.com/store/apps/details?id=com.gemanepa.framingham" className="anchor">
              <span>Android App</span>
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
