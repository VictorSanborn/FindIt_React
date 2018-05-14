// The types of actions that you can dispatch to modify the state of the store
export const types = {
  SETUSERID: "SETUSERID",
  SETLOGINUSERNAME: "SETLOGINUSERNAME",
  SETLOGINPASSWORD: "SETLOGINPASSWORD",
  REMOVELOGINBOXDATA: "REMOVELOGINBOXDATA",
};
  
// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  setUserID: item => {
      return { type: types.SETUSERID, payload: item};
  },
  setLoginUser: item => {
    return { type: types.SETLOGINUSERNAME, payload: item};
  },
  setLoginPassword: item => {
    return { type: types.SETLOGINPASSWORD, payload: item};
  },
  removeLoginBoxData: item => {
    return { type: types.REMOVELOGINBOXDATA, payload: item};
  }
};
  
// Initial state of the store
const initialState = {
  userID: '',
  setLoginUser: '',
  setLoginPassword: '',
};

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
  const { userID } = state;
  const { type, payload } = action;

  switch (type) {
    case types.SETUSERID: {
      return {
        ...state,
        userID: payload,
      };
    }
    case types.SETLOGINUSERNAME: {
      return {
        ...state,
        setLoginUser: payload,
      };
    }
    case types.SETLOGINPASSWORD: {
      return {
        ...state,
        setLoginPassword: payload,
      };
    }
    case types.REMOVELOGINBOXDATA: {
      return {
        ...state,
        setLoginUser: '',
        setLoginPassword: ''
      };
    }
  }

  return state;
};
  