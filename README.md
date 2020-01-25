# Framingham CardioRisk
![enter image description here](https://i.imgur.com/VPkYo89.png)

*A Progressive Web App made with React NextJS*
Live version: https://framinghamcalc.now.sh/

## Tech Stack

 - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
 - [NextJS](https://nextjs.org/)
 - [Docker](https://www.docker.com/)
 - [Material UI](https://material-ui.com/)
 - [Jest](https://jestjs.io/)
 - [Cypress](https://www.cypress.io/)
 - [ESLint](https://eslint.org/)
 - [ZEIT](https://zeit.co/)


## Software Requisites for Running Properly

 - [NodeJS](https://nodejs.org/en/download/current/)
 - [ESLint CLI](https://eslint.org/docs/user-guide/command-line-interface)  (`npm install eslint babel-eslint --global`) + [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
 -  [Docker](https://docs.docker.com/install/)

## Running app outside Docker container

 - `npm install` installs required node modules for running the application
 - `npm run dev` runs the app in development mode
 
 - `npm run build` builds app for production 
 - `npm run build:run`runs production build    
 - `npm run lint:check` highlights all lint errors in application    
 - `npm run lint:fix` solve all lint errors that can be solved automatically    
 - `npm run test` runs unitary and end-to-end tests
 - `npm run test:u` runs unitary tests only
 - `npm run test:e2e` runs end-to-end tests only headlessly in an electron browser
 - `npm run cypress:open` runs [cypress](https://www.cypress.io/) interactive mode, allowing to run end-to-end tests individually with a non-headless electron browser

## Running inside Docker container

 - `npm run docker:install` builds docker container and install node modules inside 
 - `npm run docker:dev` runs the app in development mode
 - `npm run docker:rebuild` rebuilds the container with the new files   
   modifications
 - `npm run docker:stop` stops running container
 - `npm run docker:rm` removes container

## Android App Brother 
![enter image description here](https://i.imgur.com/8Gm6fK5.png)

[Github Repository](https://github.com/gemanepa/framingham-android) | [Google Play Store](https://play.google.com/store/apps/details?id=com.gemanepa.framingham)
