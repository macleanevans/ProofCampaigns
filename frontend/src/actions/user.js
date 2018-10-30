// Imports
import jwtDecode from 'jwt-decode'
// App Imports
import config from '../config'
//Util functions
import Utils from '../utils';

export const USER_CURRENT_SET = 'USER_CURRENT_SET'

export function postLogin (credentials) {
  return dispatch => {
    return Utils.loginRequest(credentials)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(response => {
        if (response.success) {
          const token = response.data.token

          localStorage.setItem('token', token)

          dispatch(setCurrentUser(jwtDecode(token)))
        }

        return response
      })
  }
}


export function setCurrentUser (user) {
  return {
    type: USER_CURRENT_SET,
    user
  }
}

export function userLogout () {
  return dispatch => {
    localStorage.removeItem('token')

    dispatch(setCurrentUser({}))

    return {success: true}
  }
}
