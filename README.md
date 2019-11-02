# reactpwa-framingham

WORK IN PROGRESS | NOT READY FOR DEPLOYMENT YET

  yarn lint:check | Requires eslint cli
  yarn lint:fix | Requires eslint cli

How to Run in Docker
  yarn docker:install builds docker container and install node modules inside
  yarn docker:dev runs the app in development mode
  yarn docker:rebuild rebuilds the container with the new files modifications
  yarn docker:stop stops running container
  yarn docker:rm removes container 

Always use "sudo yarn" if you are using a Linux OS

Code Linter not working?
npm install eslint babel-eslint --global
Also install VSCode Eslint extension: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint