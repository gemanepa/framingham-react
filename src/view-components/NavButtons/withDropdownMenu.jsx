import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TranslateIcon from '@material-ui/icons/Translate';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '../Link';
import afFlag from '../../../public/flags/af-flag.png';
import caFlag from '../../../public/flags/ca-flag.png';
import daFlag from '../../../public/flags/da-flag.png';
import enFlag from '../../../public/flags/en-flag.png';
import esFlag from '../../../public/flags/es-flag.png';
import deFlag from '../../../public/flags/de-flag.png';
import frFlag from '../../../public/flags/fr-flag.png';
import itFlag from '../../../public/flags/it-flag.png';
import nlFlag from '../../../public/flags/nl-flag.png';
import ptFlag from '../../../public/flags/pt-flag.png';
import ruFlag from '../../../public/flags/ru-flag.png';
import svFlag from '../../../public/flags/sv-flag.png';
import fhsLogo from '../../../public/logos/fhslogo.png';
import nihLogo from '../../../public/logos/nihlogo.png';
import wikipediaLogo from '../../../public/logos/wikipedialogo3.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  langmenuButton: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    boxShadow: 'none',
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#4689c8',
    textShadow: '1px 1px #005c97',
    '&:hover': {
      background: '#005c97',
    },
    width: window.innerWidth > 1199 ? '30%' : null,
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props} // eslint-disable-line react/jsx-props-no-spreading
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const { menuType, text } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleClick}
        className={classes.button}
        startIcon={menuType === 'language' ? <TranslateIcon /> : <ExitToAppIcon />}
        data-test={`NavButtons_${menuType}Btn`}
      >
        {menuType === 'language' && <div className="predisappear" />}
        <span className={menuType === 'language' ? 'disappear' : ''}>{text}</span>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        key={`menu-${menuType}`}
      >
        { menuType === 'language'
          ? (
            <div key={`${menuType}-items`}>
              <Link href="/?lang=af" as="/af" color="secondary" data-test="Navbuttons_languages_af">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-af-menuitem`}>
                  <ListItemIcon key={`${menuType}-af-listitemicon`}>
                    <img src={afFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Afrikaans" key={`${menuType}-af-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=ca" as="/ca" color="secondary" data-test="Navbuttons_languages_ca">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-ca-menuitem`}>
                  <ListItemIcon key={`${menuType}-ca-listitemicon`}>
                    <img src={caFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Català" key={`${menuType}-ca-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=da" as="/da" color="secondary" data-test="Navbuttons_languages_da">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-da-menuitem`}>
                  <ListItemIcon key={`${menuType}-da-listitemicon`}>
                    <img src={daFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Dansk" key={`${menuType}-da-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=de" as="/de" color="secondary" data-test="Navbuttons_languages_de">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-de-menuitem`}>
                  <ListItemIcon key={`${menuType}-de-listitemicon`}>
                    <img src={deFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Deutsch" key={`${menuType}-de-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=en" as="/en" color="secondary" data-test="Navbuttons_languages_en">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-en-menuitem`}>
                  <ListItemIcon key={`${menuType}-en-listitemicon`}>
                    <img src={enFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="English" key={`${menuType}-en-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=es" as="/es" color="secondary" data-test="Navbuttons_languages_es">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-es-menuitem`}>
                  <ListItemIcon key={`${menuType}-es-listitemicon`}>
                    <img src={esFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Español" key={`${menuType}-es-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=fr" as="/fr" color="secondary" data-test="Navbuttons_languages_fr">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-fr-menuitem`}>
                  <ListItemIcon key={`${menuType}-fr-listitemicon`}>
                    <img src={frFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Français" key={`${menuType}-fr-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=it" as="/it" color="secondary" data-test="Navbuttons_languages_it">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-it-menuitem`}>
                  <ListItemIcon key={`${menuType}-it-listitemicon`}>
                    <img src={itFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Italiano" key={`${menuType}-it-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=nl" as="/nl" color="secondary" data-test="Navbuttons_languages_nl">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-nl-menuitem`}>
                  <ListItemIcon key={`${menuType}-it-listitemicon`}>
                    <img src={nlFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Nederlands" key={`${menuType}-nl-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=pt" as="/pt" color="secondary" data-test="Navbuttons_languages_pt">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-pt-menuitem`}>
                  <ListItemIcon key={`${menuType}-pt-listitemicon`}>
                    <img src={ptFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Português" key={`${menuType}-pt-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=ru" as="/ru" color="secondary" data-test="Navbuttons_languages_ru">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-ru-menuitem`}>
                  <ListItemIcon key={`${menuType}-ru-listitemicon`}>
                    <img src={ruFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Русский" key={`${menuType}-ru-listitemtext`} />
                </StyledMenuItem>
              </Link>
              <Link href="/?lang=sv" as="/sv" color="secondary" data-test="Navbuttons_languages_sv">
                <StyledMenuItem onClick={handleClose} key={`${menuType}-sv-menuitem`}>
                  <ListItemIcon key={`${menuType}-sv-listitemicon`}>
                    <img src={svFlag} alt="" className="navflagsimgs" />
                  </ListItemIcon>
                  <ListItemText primary="Svenska" key={`${menuType}-sv-listitemtext`} />
                </StyledMenuItem>
              </Link>
            </div>
          )
          : (
            <div key={`${menuType}-items`}>
              <a
                href="https://www.framinghamheartstudy.org/"
                target="_blank"
                rel="noopener noreferrer"
                title="Framingham Heart Study"
                data-test="NavButtons_elinks_FHS"
              >
                <StyledMenuItem onClick={handleClose} key={`${menuType}-fsh-menuitem`}>
                  <ListItemIcon key={`${menuType}-fsh-listitemicon`}>
                    <img src={fhsLogo} alt="" className="fshlogo" />
                  </ListItemIcon>
                  <ListItemText primary="FHS" />
                </StyledMenuItem>
              </a>
              <a
                href="https://www.nhlbi.nih.gov/science/framingham-heart-study-fhs/"
                target="_blank"
                rel="noopener noreferrer"
                title="National Institutes of Health"
                data-test="NavButtons_elinks_NIH"
              >
                <StyledMenuItem onClick={handleClose} key={`${menuType}-nih-menuitem`}>
                  <ListItemIcon key={`${menuType}-nih-listitemicon`}>
                    <img src={nihLogo} alt="" className="nihlogo" />
                  </ListItemIcon>
                  <ListItemText primary="NIH" />
                </StyledMenuItem>
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Framingham_Risk_Score"
                target="_blank"
                rel="noopener noreferrer"
                title="Wikipedia"
                data-test="NavButtons_elinks_Wiki"
              >
                <StyledMenuItem onClick={handleClose} key={`${menuType}-wiki-menuitem`}>
                  <ListItemIcon key={`${menuType}-wiki-listitemicon`}>
                    <img src={wikipediaLogo} alt="" className="wikilogo" />
                  </ListItemIcon>
                  <ListItemText primary="Wikipedia" />
                </StyledMenuItem>
              </a>
            </div>
          )}
      </StyledMenu>
      <style jsx>
        {`
        .langmenuimg:hover, .elinksgmenuimg:hover {
          filter: brightness(120%);
        }
        .fshlogo {
          height: 40px;
          width: auto;
        }

        .nihlogo {
          height: 30px;
          width: auto;
          margin-bottom: 5px;
        }

        .wikilogo {
          height: 31px;
          width: auto;
          margin-bottom: 3px;
        }
        @media (max-width: 1199px) {
          .langmenuimg {
            height: 50px;
            width: auto;
          }
          .elinksgmenuimg {
            height: 45px;
            width: auto;
          }
          .navflagsimgs {
            height: 40px;
            width: auto;
          }
        }
        @media (min-width: 1200px) {
          padding-top: 0.125rem;
          .langmenuimg {
            height: 10vh;
            min-height: 65px;
            width: auto;
          }
          .elinksgmenuimg {
            height: 7vh;
            width: auto;
          }
          .navflagsimgs {
            height: 5.5vh;
            min-height: 35px;
            margin-top: -0.5vh;
            width: auto;
          }
        }

        @keyframes blur {
          from {
            opacity: 0;
          }

          10% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
  
        .disappear {
          position: absolute;
          animation-name: blur;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-duration: 5s;
        }

        @media (max-width: 600px) {
          .predisappear {
            min-width: 105px;
          }
        }
        @media (min-width: 601px) and (max-width: 1199px){
          .predisappear {
            min-width: 16.5%;
          }
        }
        @media (min-width: 1200px) {
          .predisappear {
            min-width: 67.5%;
          }
        }
      `}
      </style>
    </>
  );
}


CustomizedMenus.propTypes = {
  menuType: PropTypes.oneOf(['language', 'elinks']).isRequired,
  text: PropTypes.string.isRequired
};
