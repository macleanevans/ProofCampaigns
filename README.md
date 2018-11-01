# Proof Campaigns

## Requirments 
- Node (v6.12)
    -Link to Node Version Manager (https://github.com/creationix/nvm)
- Nodemon
- MongoDB

## ▶️ Running
- Install NPM modules for **api** `cd api` and `npm install`
- Install NPM modules for **frontend** `cd frontend` and `npm install`
- Install Monogo on your local machine https://docs.mongodb.com/manual/installation/
- Open a new terminal session and start your mongo server `mongod`
- Open a new terminal session and type `mongo` then enter `use Proof_Campaigns`
    - If you want to choose a different name for your DB you will need to change the databaseUrl in `api/src/config`
- Populate your Proof_Campaigns DB by navigating to the api folder `cd api` and running `npm run init-db`
- Run **api** server `cd api` and `npm start` (runs on port configured under `api/src/config/index.js`)
- Run **frontend** server `cd frontend` and `npm start` (runs on port 3000)
- To run **tests** `cd api` and `mocha`


## App Credentials 
- All Users are registered as user_n based on their position in the CSV
    -You can see the data that is populated in monog in `api/src/scripts/scriptConstants`
- Password for all users is test


