import React from 'react';

export default function Header(props){
  return(
  <>
    <header className="appHeader">
      <h1>{props.headerTitle}</h1>
    </header>
    <style jsx>{`
      h1 {
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