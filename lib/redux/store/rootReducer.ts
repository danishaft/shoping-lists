import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer} from 'redux-persist'
import ToggleReducer from '../slice/toggler'
import AddItemReducer from '../slice/addItem'
import SideBarReducer from "../slice/sidebarFlow";


const rootPersistConfig = {
    key: 'root',
    storage, 
    blacklist: ['toggler', 'activeSidebarPage']
}

const rootReducer = combineReducers({
    toggler: ToggleReducer,
    Items : AddItemReducer,
    activeSideBarPage: SideBarReducer,
})

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer)