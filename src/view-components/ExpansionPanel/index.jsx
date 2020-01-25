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

export default function CustomizedExpansionPanels(props) {
  const { translations } = props;
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{translations.usefulness}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {translations.usefulness_text_start}
          <ul>
            <li>{translations.usefulness_text_lowrisk}</li>
            <li>{translations.usefulness_text_intermediaterisk}</li>
            <li>{translations.usefulness_text_highrisk}</li>
          </ul>
          {translations.usefulness_text_end}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>{translations.purpose}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {translations.purpose_text1}
          <br /><br />
          {translations.purpose_text2}
          <br /><br />
          {translations.purpose_text3} 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>{translations.validation}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          {translations.validation_text}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11448281-validation-of-the-framingham-coronary-heart-disease-prediction-scores-results-of-a-multiple-ethnic-groups-investigation/" target="_blank" rel="noopener noreferrer" data-test="Info_ValidationElink">
            <LinkIcon fontSize="small" />
          </a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}