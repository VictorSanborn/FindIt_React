// The types of actions that you can dispatch to modify the state of the store
export const types = {
  SET: "SET",
};
  
// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  set: item => {
      return { type: types.SET, payload: item};
  }
};
  
// Initial state of the store
const initialState = {
  user: 'Test',
};

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
  const { user } = state;
  const { type, payload } = action;

  switch (type) {
    case types.SET: {
      return {
        ...state,
        user: payload,
      };
    }
  }

  return state;
};
  