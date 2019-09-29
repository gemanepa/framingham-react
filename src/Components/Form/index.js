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
    width: (window && window.innerWidth > 1199) ? '40%' : undefined
  },
  resetButton: {
    margin: theme.spacing(1),
  }
}));

function needsBr(name, width){
  if((name === 'age' || name === 'totaldl' || name === 'wt') && width > 1199) {
    return true
  }
  return false
}

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
    smokingCheckbox: false,
    diabetesCheckbox: false,
    treamentCheckbox: false,
  });

  const handleCheckboxChange = name => event => {
    setCheckboxState({ ...checkboxVals, [name]: event.target.checked });
  };

  return (
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
          {window && needsBr(select.name, window.innerWidth) && <br />}
        </>
      )}

      <FormGroup row className="checkboxes">
      {checkboxes.map(checkbox =>
        <FormControlLabel
          control={
            <Checkbox checked={checkboxVals.checkedA} onChange={handleCheckboxChange(checkbox.checkboxKey)} value={checkbox.checkboxKey} />
          }
          label={checkbox.label}
        />)}
      </FormGroup>
      <br />

      <div className="formbuttons">
        <Button variant="contained" color="secondary" className={classes.resetButton}>
          Reset
        </Button>

        <Button variant="contained" color="primary" className={classes.calcButton}>
          Calculate
        </Button>
      </div>
    </form>
  );
}