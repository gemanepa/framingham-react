import React from 'react';
import applogo from './../../static/logos/applogo.png'; 
export default function Header(props){
  return(
  <>
    <header className="appHeader">
      <img src={applogo} alt="CR Framingham" className="navlogo" />
      <h1>{props.navbar_title}</h1>
    </header>
    <style jsx>{`
      @media (max-width: 1199px) {
        .navlogo {
          height: 85px;
          width: 85px;
          margin: 0 auto;
          z-index: 999;
        }
        .appHeader {
          margin-top: -45px;
        };
      }
      @media (min-width: 1200px) {
        .navlogo {
          min-height: 85px;
          height: 85px;
          width: 85px;
          margin: 0 auto;
          z-index: 999;
        }

        .appHeader {
          margin-top: -7vh;
        };
      }
      .navlogo:hover {
        filter: brightness(110%);
      }
      h1 {
        margin-top: 0;
        font-family: Lato;
      };
      .appHeader {
          text-align: center;
          color: #4689C8;
          font-weight: 600;
        };
    `}</style>
  </>
  )
}