import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    borderRadius: '5px',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#4689c8',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    textShadow: '1px 1px #005c97',
    color: 'white',
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Usefulness</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Coronary heart disease (CHD) risk at 10 years in percent can be calculated with the help of the Framingham Risk Score. Individuals with low risk have 10% or less CHD risk at 10 years, with intermediate risk 10-20%, and with high risk 20% or more. However it should be remembered that these categorisations are arbitrary.
         </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Background</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          An individual's risk for future cardiovascular events is modifiable by lifestyle changes and preventive medical treatment. 
          <br /><br />
          Lifestyle changes can include stopping smoking, healthy diet, regular exercise, etc. Preventive medical treatment can include a statin, mini dose aspirin, treatment for hypertension, etc.
          <br /><br />
          It is important to be able to predict the risk of an individual patient in order to decide when to initiate lifestyle modification and preventive medical treatment and multiple risk models for the prediction of cardiovascular risk of individual patients have been developed. 
          One such key risk model is the Framingham Risk Score.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Validation</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          The Framingham Risk Score has been validated in the US, both in men and women, both in European Americans and African Americans.
          <a href="https://pubmed.ncbi.nlm.nih.gov/11448281-validation-of-the-framingham-coronary-heart-disease-prediction-scores-results-of-a-multiple-ethnic-groups-investigation/" target="_blank" rel="noopener noreferrer" data-test="Info_ValidationElink">
            <LinkIcon fontSize="small" />
          </a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}