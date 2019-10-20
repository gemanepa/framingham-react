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

import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';

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

  

export default function Form(props) {
  let { translations } = props;
  const classes = useStyles();

  // Validations
  const [errors, setErrors] = React.useState({
    gender: false,
    age: false,
    hdl: false,
    ldl: false,
    totaldl: false,
    ta: false,
    wt: false
  })

  //Radio logic
  const [radioVal, setRadioVal] = React.useState('');
  function handleRadioChange(event) {
    setErrors({...errors, gender: false})
    setRadioVal(event.target.value)
  }

  //Selects logic
  const [selectsVals, setSelectsVals] = React.useState({ });
  const handleSelectChange = event => {
    setErrors({...errors, [event.target.name]: false})
    setSelectsVals(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  // Checkbox Logic
  const [checkboxVals, setCheckboxState] = React.useState({
    smoking: false,
    diabetes: false,
    hypertension_in_treatment: false,
  });
  const handleCheckboxChange = name => event => {
    setCheckboxState({ ...checkboxVals, [name]: event.target.checked });
  };

  function validateSubmittedData(data) {
    let failedVal = {
      gender: false,
      age: false,
      hdl: false,
      ldl: false,
      totaldl: false,
      ta: false,
      wt: false  
    }
    if(!data.gender) {failedVal.gender = true}
    if(!data.age) {failedVal.age = true}
    if(!data.hdl) {failedVal.hdl = true}
    if(!data.ldl) {failedVal.ldl = true}
    if(!data.totaldl) {failedVal.totaldl = true}
    if(!data.ta) {failedVal.ta = true}
    if(!data.wt) {failedVal.wt = true}

    if(!data.gender || !data.age || !data.hdl || !data.ldl || !data.totaldl || !data.ta || !data.wt) {
      setErrors({...failedVal})
      return false
    } else if (data.diabetes == undefined || data.smoking == undefined || data.treatment == undefined) {
      alert('???')
      return false
    }
    return true
  }
  function resetButtonHandler() {
      setRadioVal('');
      setSelectsVals({ });
      setCheckboxState({ ...checkboxVals, smoking: false, diabetes: false, hypertension_in_treatment: false });
      setErrors({
        gender: false,
        age: false,
        hdl: false,
        ldl: false,
        totald: false,
        ta: false,
        wt: false  
      })
      props.resetResults();
  }

  function calcButtonHandler(){
    const data = {
      gender: radioVal,
      age: selectsVals.age,
      hdl: selectsVals.hdl,
      ldl: selectsVals.ldl,
      totaldl: selectsVals.totaldl,
      ta: selectsVals.ta,
      wt: selectsVals.wt,
      diabetes: checkboxVals.diabetes,
      smoking: checkboxVals.smoking,
      treatment: checkboxVals.hypertension_in_treatment
    }
    if(validateSubmittedData(data)) { props.datasubmittedHandler(data) }
  }
  return (
    <>
    <form autoComplete="off">
      
      <FormControl component="fieldset" className={classes.formControl} error={errors.gender} >
        <FormLabel component="legend">{translations.gender}</FormLabel>
        <RadioGroup aria-label="gender" name="gender" value={radioVal} onChange={event => handleRadioChange(event)} row>
          <div className={errors.gender ? 'error' : ''}>
          <FormControlLabel value="female" control={<Radio />} label={translations.woman} />
          <FormControlLabel value="male" control={<Radio />} label={translations.man} />
          </div>

        </RadioGroup>
      </FormControl>
      {selects.map(select =>
        <>
          <FormControl className={classes.formControl} error={errors[select.name]}>
            <InputLabel htmlFor={select.name}>{translations[select.label]}</InputLabel>
            <Select
              value={selectsVals[select.name]}
              onChange={handleSelectChange}
              inputProps={{
                name: select.name,
                id: select.name,
              }}
            >

            {select.name !== 'wt' && select.values.map(val => 
              <MenuItem value={val}>{val}</MenuItem>
            )}


            {(select.name == 'wt' && !radioVal) && 
              <MenuItem value=''>Gender required</MenuItem>
            }
            {(select.name == 'wt' && radioVal) && select.values[radioVal].map(val => 
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
          label={translations[checkbox.checkboxKey]}
        />)}
      </FormGroup>
      <br />

      <div className="formbuttons">
        <Button onClick={resetButtonHandler} variant="contained" color="secondary" className={classes.resetButton} >
          <DeleteIcon />
        </Button>

        {(typeof window !== 'undefined' && window.innerWidth < 1200 &&
        <Button onClick={calcButtonHandler} variant="contained" color="primary" className={classes.resetButton}>
          <SendIcon/>
        </Button>)}

        {(typeof window !== 'undefined' && window.innerWidth > 1199 &&
        <Button onClick={calcButtonHandler} variant="contained" color="primary" className={classes.calcButton}>
          <SendIcon/>
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

      .error {
        color: #ff1744;
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