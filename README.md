# Framingham CardioRisk
![enter image description here](https://i.imgur.com/VPkYo89.png)

A Progressive Web App made with React NextJS


## Tech Stack

 - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
 - [NextJS](https://nextjs.org/)
 - [Docker](https://www.docker.com/)
 - [Material UI](https://material-ui.com/)
 - [Cypress](https://www.cypress.io/)
 - [ESLint](https://eslint.org/)


## Software Requisites for Running Properly

 - [NodeJS](https://nodejs.org/en/download/current/)
 - [Yarn](https://yarnpkg.com/lang/en/docs/install)
 - [ESLint CLI](https://eslint.org/docs/user-guide/command-line-interface)  (`npm install eslint babel-eslint --global`) + [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
 -  [Docker](https://docs.docker.com/install/)

## Running app outside Docker container

 - `yarn` installs required node modules for running the application
 - `yarn dev` runs the app in development mode
 - `yarn build` builds app for production 
 - `yarn build:run`runs production build    
 - `yarn lint:check` highlights all lint errors in application    
 - `yarn lint:fix` solve all lint errors that can be solved automatically    
 - `yarn cy:open` opens cypress without running any e2e test
 - `yarn cy:run` runs cypress end to end tests

## Running inside Docker container

 - `yarn docker:install` builds docker container and install node
   modules inside 
 - `yarn docker:dev` runs the app in development mode
 - `yarn docker:rebuild` rebuilds the container with the new files   
   modifications
 - `yarn docker:stop` stops running container
 - `yarn docker:rm` removes container

## Android App Brother 
![enter image description here](https://i.imgur.com/8Gm6fK5.png)

[Github Repository](https://github.com/gemanepa/framingham-android) | [Google Play Store](https://play.google.com/store/apps/details?id=com.gemanepa.framingham)
