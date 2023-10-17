import { combineReducers } from "@reduxjs/toolkit";
import ToggleReducer from '../slice/toggler'
import AddItemReducer from '../slice/addItem'


export const rootReducer = combineReducers({
    toggler: ToggleReducer,
    addItems :   AddItemReducer
})