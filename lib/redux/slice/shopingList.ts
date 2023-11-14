
import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Item } from '@/utils/interfaces';

const initialState: {list: Item[], saveList: boolean} = {
    list: [],
    saveList: false,
}

export const shoppingList = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<Item>) => {
            const value = state.list
            state.list = [...value, action.payload]
        },
        deleteFromList: (state, action: PayloadAction<Item>) => {
            const value = state.list
            state.list = value.filter(item => item.id !== action.payload.id)
        },
        editListItem: (state, action: PayloadAction<Item>) => {
            const value = state.list
            state.list = value.map((item) => item.id === action.payload.id ? action.payload : item)
        },
        saveList: (state) => {
            const value = state.saveList
            state.saveList = !value
            console.log(state.saveList)
        }
    }
})

export const {addToList, deleteFromList, editListItem, saveList} = shoppingList.actions
export default shoppingList.reducer