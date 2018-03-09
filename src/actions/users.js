import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config.js';
import {normalizeResponseErrors} from './utils.js';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const registerError = error => ({
  type: REGISTER_ERROR,
  error
})

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      dispatch(registerError(err));
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};