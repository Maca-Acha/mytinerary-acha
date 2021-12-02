import { combineReducers } from "redux";
import citiesReducers from './citiesReducer'

const mainReducer = combineReducers ({
    citiesReducers
})

export default mainReducer