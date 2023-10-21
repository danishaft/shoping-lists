import { combineReducers } from "@reduxjs/toolkit";
import ToggleReducer from '../slice/toggler'
import AddItemReducer from '../slice/addItem'
import SideBarReducer from "../slice/sidebarFlow";


export const rootReducer = combineReducers({
    toggler: ToggleReducer,
    addItems :   AddItemReducer,
    activeSideBarPage: SideBarReducer
})