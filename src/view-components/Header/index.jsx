import React from 'react';
import PropTypes from 'prop-types';
import applogo from '../../../public/logos/applogo.jpg';


export default function Header(props) {
  const { translations, lang } = props;
  const { briefDescription, navbarTitle } = translations;

  const firstString = navbarTitle.split(' ')[0];
  const secondString = navbarTitle.split(' ')[1];

  function handleSubheaderPadding() {
    const horizontalPadding = {
      af: '20%',
      ca: '19%',
      da: '20%',
      en: '21%',
      es: '17%',
      de: '13%',
      fr: '16%',
      it: '20%',
      pt: '20%'
    };

    return `5% ${horizontalPadding[lang]}`;
  }
  return (
    <>
      <header className="appHeader" data-test="appHeader">
        <img src={applogo} alt="CR Framingham" className="navlogo" />
        <h1>
          <span>{ firstString }</span>
          <span>{ secondString }</span>
        </h1>
      </header>
      <h2 className="subheader" data-test="subheader">{briefDescription}</h2>
      <style jsx>
        {`
        h1 {
          margin-top: 0;
          display: flex;
          flex-direction: column;
          text-align: center;
          position: relative;
          color: white;
          margin: 0;
          padding: 0;
          border: 0;
          text-shadow: 2px 2px #4689c8;
          font-size: 340%;
        };
        .appHeader {
          color: #4689C8;
          font-weight: 600;
        };
        h2.subheader {
          color: white;
          text-shadow: 2px 2px #4689c8;
          font-size: 240%;
          text-align: center;
        }
      @media (max-width: 1199px) {
        .navlogo {
          height: 50%;
          width: 50%;
          margin: 0 auto;
          z-index: 999;
        }
        .appHeader {
          display: flex;
          flex-direction: column;
          justify-content: center;
        };
      }
      @media (min-width: 1200px) {
        .navlogo {
          height: 35%;
          width: 35%;
          margin: 0 auto;
          position: relative;
        }

        .appHeader {
          margin-top: 7vh;
          display: flex;
          flex-direction: row;
          padding-left: 80px;
          padding-right: 80px;
        };

        h1 {
          padding-top: 5.5%;
          font-size: 7.175vh;
          text-shadow: 0.15vw 0.15vw #4689c8;
        }

        h2.subheader {
          margin-top: -0.5vh;
          margin-bottom: -0.5vh;
          font-size: 2.46vw;
          padding: ${handleSubheaderPadding()};
        }
      }

    `}
      </style>
    </>
  );
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  translations: PropTypes.exact({
    briefDescription: PropTypes.string.isRequired,
    navbarTitle: PropTypes.string.isRequired,
  }).isRequired
};
