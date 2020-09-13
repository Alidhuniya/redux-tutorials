
import counterReducer from './counterReducer';
import switchReducer from './switchReducer';
import { combineReducers } from 'redux';

const allReducer =  combineReducers(
    {
        counter: counterReducer,
        switch: switchReducer,
    }
);

export default allReducer;