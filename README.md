## step 1 : run this sample command to clone this template to your pc 
`git clone  https://github.com/n3xusss/backend_express_template`
## step 2 : after cloning the repo run a terminal inside the cloned repo folder and run this command to install all dependencies
`npm install`
## step 3 : after install all dependencies you will need to run the server next on your terminal just type this sample command : 
`npm start`
## Template Structure:

- controllers
  - controllers.js
- db
  - connectdb.js
- extra
  - errhandler.js
  - notfound.js
- routes
  - routes.js
- schemas
  - model.js
- app.js
- package.json
## to add new participant
`/api/v1/addp - POST`
## to get all participants originzed by team
`api/v1/getp - GET `
dont forget to include your mongodb cluster in .env file after the name "MONGO = your_cluster_key"
