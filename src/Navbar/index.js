import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../Link.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import applogo from './../../static/applogo.png';
import enFlag from './../../static/en-flag.png';
import esFlag from './../../static/es-flag.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="toolbar">

          <Link href='/?lang=en' title="en" color="secondary" title="English">
            <img src={enFlag} alt="" className="navflagsimgs" />
          </Link>

          <div className="navflagslinks">
            <Link href='/?lang=es' title="es" color="secondary" title="Español">
              <img src={esFlag} alt="" className="navflagsimgs" />
            </Link>
          </div>

          <Typography variant="h6" className={classes.title} />
          <img src={applogo} alt="CR Framingham" className="navlogo" />
          <Typography variant="h6" className={classes.title} />
          <img src={applogo} alt="CR Framingham" className="navlogo" />
          <Link href="/about" title="asdf" color="secondary">
            <Button color="inherit">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
    <style jsx>{`
      .navlogo {
        height: 7.6vh;
        width: auto;
      }
      .navlogo:hover {
        filter: brightness(110%);
      }
      .navflagsimgs {
        height: 5.5vh;
        margin-top: 1vh;
        width: auto;
      }
      .navflagslinks {
        margin-left: 10px;
        margin-right: 10px;
      }
      .navflagsimgs:hover {
        filter: brightness(120%);
      }

      @media (max-width: 1199px) {
        .navlogo {
          height: 50px;
        }
        .navflagsimgs {
          height: 40px;
          margin-top: 6px;
        }
      }
        `}</style>
    </>
  );
}