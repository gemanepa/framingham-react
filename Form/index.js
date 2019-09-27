import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
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

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    hdl: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);


  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };


  return (
    <form className={classes.root} autoComplete="off">
    {selects.map(select =>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={select.name}>{select.label}</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
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