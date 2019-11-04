import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AndroidIcon from '@material-ui/icons/Android';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InfoIcon from '@material-ui/icons/Info';
import TranslateIcon from '@material-ui/icons/Translate';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#4689c8',
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
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<ExitToAppIcon />}
          >
            <span>Elinks</span>
          </Button>
        </div>
        <div className="secondrow">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<TranslateIcon />}
          >
            <span>Traducir</span>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
            startIcon={<AndroidIcon />}
          >
            <span>Android App</span>
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

      .navbuttons span {
        text-shadow: 1px 1px #005c97;
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
