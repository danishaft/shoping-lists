import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { itemData, singleItem } from '@/utils/data';
import { Item } from '@/utils/interfaces';

const initialState = {
    value: itemData,
    newItem: singleItem
}

export const addItem = createSlice({
    name: 'addItems',
    initialState,
    reducers: {
        saveNewItem: (state, action: PayloadAction<Item>) => {
            state.newItem = action.payload;
        },
        createItem: (state, action: PayloadAction<Item>) => {
            const value = state.value
            state.value = [...value, action.payload]
        }
    }
})

export const {saveNewItem, createItem} = addItem.actions
export default addItem.reducer