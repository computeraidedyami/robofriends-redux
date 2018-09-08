import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
//import { robots } from './robots'
import {Provider,} from 'react-redux';//Provider and connect are APIs, connect is optimized to avoid using STORE.SUBSCRIBE
import {createStore, applyMiddleware,combineReducers} from 'redux';
//combineReducers into a root reducer
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';//thunk waits to and sees if any actions return a function instead of an object
import {searchRobots,requestRobots} from './reducers';



const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = createStore( rootReducer, applyMiddleware(thunkMiddleware,logger))// rootReducer is the reducer of the app when you have many reducers...
ReactDOM.render(//...in this case we put the only reducer we have (searchRobots)

<Provider store={store}>
    <App /> 
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
//App is a SMART COMPONENT
//Provider could be considered the  MAIN STATE that is made aware in SMART COMPONENTS(CONTAINERS)