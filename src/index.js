import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import allReducer from "./redux/reducer";
import {Provider} from "react-redux";



const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/*
// STORE -> GLOBALIZE STATE

//ACTION
const increment = () => {
    return {
        type:'INCREMENT'
    }
}

const decrement = () => {
    return {
        type:'DECREMENT'
    }
}

// REDUCER
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state +1
        case 'DECREMENT':
            return state -1
    }
}

let store = createStore(counter);

store.subscribe(()=> console.log(store.getState()))

// DISPATCH

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

*/


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);
