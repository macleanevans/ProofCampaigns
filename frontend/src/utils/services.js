import config from '../config'


function loginRequest(credentials){
    return fetch(`${config.url.api}login`, {
        method: 'post',

        body: JSON.stringify(credentials),

        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function updateUserRequest(user, newCampaignList){
    const token = localStorage.getItem('token')
    const data = {user, newCampaignList}
    
    return fetch(`${config.url.api}updateCampaignList`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
}

export default {
    loginRequest, 
    updateUserRequest
}