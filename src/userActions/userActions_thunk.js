import { SIGNIN_REQUEST, SIGNIN_RESOLVE, SIGNIN_REJECT, SIGNOUT } from './userTypes'
import backand from '@backand/vanilla-sdk'

export const getUserDetails = (force) => {
  return dispatch => {
    dispatch(request());
    backand.user.getUserDetails(force)
      .then(response => {
        dispatch(resolve(response.data));
      })
      .catch(error => {
        dispatch(reject(error.data));
      });
  };
}

export const useAnonymousAuth = () => {
  return dispatch => {
    dispatch(request());
    backand.useAnonymousAuth()
      .then(response => {
        dispatch(resolve(response.data));
      })
      .catch(error => {
        dispatch(reject(error.data));
      });
  };
}

export const signin = (username, password) => {
  return dispatch => {
    dispatch(request());
    backand.signin(username, password)
      .then(response => {
        dispatch(resolve(response.data));
      })
      .catch(error => {
        dispatch(reject(error.data));
      });
  };
}

export const socialSignin = (provider) => {
  return dispatch => {
    dispatch(request());
    backand.socialSignin(provider)
      .then(response => {
        dispatch(resolve(response.data));
      })
      .catch(error => {
        dispatch(reject(error.data));
      });
  };
}

export const socialSigninWithToken = (provider, token) => {
  return dispatch => {
    dispatch(request());
    backand.socialSigninWithToken(provider, token)
      .then(response => {
        dispatch(resolve(response.data));
      })
      .catch(error => {
        dispatch(reject(error.data));
      });
  };
}

export const signup = (email, password, confirmPassword, firstName, lastName, parameters) => {
  return dispatch => {
    if (!backand.defaults.runSigninAfterSignup) {
        throw new Error(`runSigninAfterSignup is false but you wish to make changes to the store.
          For the sake of maintaining the consistent of your store, either
          Change runSigninAfterSignup to true, or
          use the function as is from the "vanillabknd-sdk"`);
    }
    dispatch(request());
    backand.signup(firstName, lastName, email, password, confirmPassword, parameters)
      .then(response => {
        dispatch(resolve(response.data));
      })
      .catch(error => {
        dispatch(reject(error.data));
      });
  };
}

export const signout = () => {
  return dispatch => {
    dispatch(request());
    backand.signout()
      .then(response => {
        dispatch({ type: SIGNOUT });
      });
  };
}

const request = () => {
  return {
    type: SIGNIN_REQUEST,
  }
}
const resolve = (data) => {
  return {
    type: SIGNIN_RESOLVE,
    payload: {
      data
    }
  }
}
const reject = (error) => {
  return {
    type: SIGNIN_REJECT,
    payload: {
      error
    }
  }
}
