import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../Link.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import applogo from './../../static/applogo.png'

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
        <Toolbar>
          <img src={applogo} alt="CR Framingham" className="navlogo" />
          <Typography variant="h6" className={classes.title} />
          <Link href="/about" color="secondary"><Button color="inherit">About</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    <style jsx>{`
      .navlogo {
        height: 50px;
        width: auto;
      }
        `}</style>
    </>
  );
}