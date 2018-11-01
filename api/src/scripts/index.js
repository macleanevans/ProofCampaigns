const User = require('../models/user');
const {campaignData, userData} = require('./scriptConstants');
const Campaign = require('../models/campaign');
const config = require('../config')
const mongoose = require('mongoose')
const {checkRule} = require('../utils').mappers;


function initDb(){
    Campaign.insertMany(campaignData)
        .then(initUsers)
        .then(function(docs){
            console.log('DB initalized!')
            process.exit(0);
        })  
        .catch(err =>{
            console.log('Error initalizing mongo data --->', err);
        });
}

function initUsers(docs){
    const userDataWithCampaigns = userData.map(company =>{
        const companyCampaignList = [];
        campaignData.forEach(campaign => {
            checkRule(campaign, company, companyCampaignList);
        });
        company.campaigns = companyCampaignList;
        return company;
    })
    return User.insertMany(userDataWithCampaigns);
};

mongoose.connect(config.databaseUrl, { useNewUrlParser: true }, function (err) {
    if(!err) console.log('Connected to DB!')
})
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

initDb();
