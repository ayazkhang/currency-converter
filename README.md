Clone or download the repository. There are two parts of the project front-end that is in React and Back end that is in Node js 

** React Setup**
Switch to React directory front-end eg:- cd/front-end

** install all the required modules by running below comman**
`npm install`

** create build**
`npm run build`

** Build the Docker image **
`docker build -t front-end .`

** Run the Docker container  **
 `docker run -p 4000:4000 front-end`

** When this finishes, start app with **
`npm run start`


** Node Setup**
Switch to React directory back-end eg:- cd/back-end

** install all the required modules by running below comman**
`npm install`

** create build**
`npx tsc`

** Build the Docker image **
`docker build -t back-end .`

** Run the Docker container  **
`docker run -p 4000:4000 back-end`

** When this finishes, start app with **
`node dist/app.js `
