import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';//lee la store y renderiza 
import thunk from 'redux-thunk' //Libreria
import mainReducer from './redux/reducers/mainReducer'

const myStore = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={myStore}>    
      <App />
  </Provider>,
    document.getElementById('root')
);



