import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age">Age</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age',
          }}
        >
          <MenuItem value={'30 - 34'}>30 - 34</MenuItem>
          <MenuItem value={'35 - 39'}>35 - 39</MenuItem>
          <MenuItem value={'40 - 44'}>40 - 44</MenuItem>
          <MenuItem value={'45 - 49'}>45 - 49</MenuItem>
          <MenuItem value={'50 - 54'}>50 - 54</MenuItem>
          <MenuItem value={'55 - 59'}>55 - 59</MenuItem>
          <MenuItem value={'60 - 64'}>60 - 64</MenuItem>
          <MenuItem value={'65 - 69'}>65 - 69</MenuItem>
          <MenuItem value={'70 - 74'}>70 - 74</MenuItem>
          <MenuItem value={'75+'}>75+</MenuItem>
        </Select>
        </FormControl>
      
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="hdl">Colesterol HDL (mg/dl)</InputLabel>
        <Select
          value={values.hdl}
          onChange={handleChange}
          inputProps={{
            name: 'hdl',
            id: 'hdl',
          }}
        >
          <MenuItem value={'30 - 34'}>30 - 34</MenuItem>
          <MenuItem value={'35 - 39'}>35 - 39</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}