import { historyList } from './../slice/history';
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer} from 'redux-persist'
import ToggleReducer from '../slice/toggler'
import AddItemReducer from '../slice/Item'
import SideBarReducer from "../slice/sidebarFlow";
import shopingListReducer from "../slice/shopingList";
import historyListReducer from '../slice/history'


const rootPersistConfig = {
    key: 'root',
    storage, 
    whitelist: ['Items', 'shoppingList']
}

const rootReducer = combineReducers({
    toggler: ToggleReducer,
    Items : AddItemReducer,
    activeSideBarPage: SideBarReducer,
    shoppingList: shopingListReducer,
    historyList: historyListReducer
})

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer)