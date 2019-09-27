import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import { selects } from './data.js'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Form() {
  const classes = useStyles();


  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  //Radio logic
  const [radioVal, setRadioVal] = React.useState('female');

  //Selects logic
  const [selectsVals, setSelectsVals] = React.useState({ });
  const handleSelectChange = event => {
    setSelectsVals(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };


  return (
    <form className={classes.root} autoComplete="off">
    
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" value={radioVal} onChange={event => setRadioVal(event.target.value)}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>

    {selects.map(select =>
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
    )}
    </form>
  );
}
