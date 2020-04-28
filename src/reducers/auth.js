import { loop, Cmd } from 'redux-loop';
// todo api

import { post } from '../api';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case 'REQUEST_LOGIN':
    return loop(
      {
        ...state,
      
      },
      Cmd.run(() => post('auth/token/login', action.data,), {
        
        successActionCreator: (data) => console.log("this is sac" , data),
        failActionCreator: () => console.log("failed"),
        args: ['123']
      })
    );

  case 'USER_FETCH_SUCCESSFUL':
    return {...state, user: action.user};

  case 'USER_FETCH_FAILED':
    return {...state, error: action.error};

  default:
    return state;
  }
}
