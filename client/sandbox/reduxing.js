const redux = require('redux');
const createStore = redux.createStore;

const initialState ={
  name: "Ongki Herlambang",
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  if(action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if(action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.payload.value
    }
  }
  return state;
}

// Store
const store = createStore(rootReducer);

//Subscription
store.subscribe(() => {
  console.log('[SUBSCRIPTION]', store.getState());
});

// Dispatch Action
store.dispatch({
  type: 'INC_COUNTER'
});
store.dispatch({
  type: 'ADD_COUNTER',
  payload: {
    value: 10
  }
});
