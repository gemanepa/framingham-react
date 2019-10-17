import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import { checkboxes, selects } from './data.js'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  calcButton: {
    margin: theme.spacing(1),
    width: '40%'
  },
  resetButton: {
    margin: theme.spacing(1),
  }
}));

  

export default function Form() {
  const classes = useStyles();

  //Radio logic
  const [radioVal, setRadioVal] = React.useState('');

  //Selects logic
  const [selectsVals, setSelectsVals] = React.useState({ });
  const handleSelectChange = event => {
    setSelectsVals(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  // Checkbox Logic
  const [checkboxVals, setCheckboxState] = React.useState({
    smoking: false,
    diabetes: false,
    treatment: false,
  });

  const handleCheckboxChange = name => event => {
    setCheckboxState({ ...checkboxVals, [name]: event.target.checked });
  };

  function reset() {
      setRadioVal('');
      setSelectsVals({ });
      setCheckboxState({ ...checkboxVals, smoking: false, diabetes: false, treatment: false });
  }

  return (
    <>
    <form autoComplete="off">
      
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" value={radioVal} onChange={event => setRadioVal(event.target.value)} row>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
      {selects.map(select =>
        <>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor={select.name}>{select.label}</InputLabel>
            <Select
              value={selectsVals[select.name]}
              onChange={handleSelectChange}
              inputProps={{
                name: select.name,
                id: select.name,
              }}
            >
            {select.values.map(val => 
              <MenuItem value={val}>{val}</MenuItem>
            )}
            </Select>
            {select.helper && <FormHelperText>{select.helper}</FormHelperText>}
          </FormControl>
          
          {(select.name === 'age' || select.name === 'totaldl' || select.name === 'wt') && <br className="desktopOnly"/>}
        </>
      )}

      <FormGroup row className="checkboxes">
      {checkboxes.map(checkbox =>
        <FormControlLabel
          control={
            <Checkbox onChange={handleCheckboxChange(checkbox.checkboxKey)} checked={checkboxVals[checkbox.checkboxKey]} />
          }
          label={checkbox.label}
        />)}
      </FormGroup>
      <br />

      <div className="formbuttons">
        <Button onClick={reset} variant="contained" color="secondary" className={classes.resetButton}>
          Reset
        </Button>

        {(typeof window !== 'undefined' && window.innerWidth < 1200 &&
        <Button variant="contained" color="primary" className={classes.resetButton}>
            Calculate
        </Button>)}

        {(typeof window !== 'undefined' && window.innerWidth > 1199 &&
        <Button variant="contained" color="primary" className={classes.calcButton}>
            Calculate
          </Button>)}
      </div>
    </form>
    <style jsx>{`
      .checkboxes {
          justify-content: space-around;
          margin: 0 auto;
        };
      .formbuttons {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
      }
      
      @media (min-width: 1200px){
        .mobileOnly {
          display: none;
        }
      }
      @media (max-width: 1199px) {
        .desktopOnly {
          display: none;
        }
        form {
          display:flex;
          flex-direction: column;
          justify-content: center;
        }

        form div {
          justify-content: center;
        }

        .checkboxes {
          margin: 0 auto;
        }

        .formbuttons {
          display: flex;
          flex-direction: column-reverse;
        }
      }

      @media only screen and (max-width: 499) {
        .checkboxes {
          flex-direction: column;
          display: flex;
          justify-content: flex-start;
        }
      }
    `}</style>
    </>
  );
}