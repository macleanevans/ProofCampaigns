const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');


function findUser(request){
    let responseData = {
        success: false,
        data: {},
        errors: []
    };

    return new Promise((resolve, reject) => {
        if(!request.body){
            responseData.errors.push({type: warning, message: "Bad Request"});
            resolve(responseData);
        }
        User.findOne({ username: request.body.username }, (error, document) => {
            if (error) {
                responseData.errors.push({ type: 'critical', message: error });
                resolve(responseData);
            } else {
                if (!document) {
                    responseData.errors.push({ type: 'warning', message: 'No user exists with this username.' });
                    resolve(responseData);
                } else {
                    bcrypt.compare(request.body.password, document.password, function (hashError, hashPasswordCheck) {
                        if (!hashError) {
                            if (hashPasswordCheck) {
                                //Set the jwt token
                                //Success Response
                                responseData.data.token = jwt.sign(document._doc, config.secret)
                                responseData.success = true
                            } else {
                                responseData.errors.push({ type: 'critical', message: 'The password is incorrect.' })
                            }
                            resolve(responseData)
                        } else {
                            responseData.errors.push({ type: 'critical', message: 'Please try again.' });
                            resolve(responseData);
                        }
                    })
                }
            }
        })
    })
}

function updateUserCampaigns(request){
    let responseData = {
        success: false,
        data: {},
        errors: []
    };

    return new Promise((resolve, reject) =>{
        //Check for a bad request
        if (!request.body) {
            responseData.errors.push({ type: warning, message: "Bad Request" });
            resolve(responseData);
        } else {
            //Make the monog update query
            const data = request.body;
            const findBy = { username: data.user.username };
            const updateBy = { campaigns: data.newCampaignList };
            const options = {new: true};

            User.findOneAndUpdate(findBy, updateBy, options, (error, doc) => {
                    if(error){
                        responseData.errors.push({ type: 'critical', message: error });
                        resolve(responseData);
                    } else {
                        //Send back a good request if one user was updated
                        if(!doc){
                            responseData.errors.push({ type: 'warning', message: 'Error Updating User' });
                            resolve(responseData);
                        } else {
                            responseData.success = true;
                            responseData.data = doc;
                            resolve(responseData);
                        }
                    }
                })
        }
    })
}


module.exports = { findUser, updateUserCampaigns};