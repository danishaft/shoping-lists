
import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Item } from '@/utils/interfaces';

const initialState: {list: Item[], saveList: boolean, cancelList: boolean} = {
    list: [],
    saveList: false,
    cancelList: false,
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
        clearList: () => ({ ...initialState }),
        saveList: (state) => {
            const value = state.saveList
            state.saveList = !value
        },
        cancelList: (state) => {
            const value = state.cancelList
            state.cancelList = !value
        }
    }
})

export const {addToList, deleteFromList, editListItem, saveList, clearList, cancelList} = shoppingList.actions
export default shoppingList.reducer