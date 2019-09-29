import React from 'react';
import developerlogo from '../../media/developerlogo.png'

export default function Footer() {

  return (
      <footer>
          <a
            href="https://gemanepa.com"
            target="_blank" rel="noopener noreferrer"
            title="Developed by gemanepa.com">
            <img src={developerlogo} alt="gemanepa" />
          </a>
      </footer>
  );
}