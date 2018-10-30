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

export default {
    loginRequest
}