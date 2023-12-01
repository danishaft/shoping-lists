import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { itemData, singleItem } from '@/utils/data';
import { Item } from '@/utils/interfaces';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    value: itemData,
    newItem: singleItem
}

export const addItem = createSlice({
    name: 'Items',
    initialState,
    reducers: {
        saveNewItem: (state, action: PayloadAction<Item>) => {
            state.newItem = action.payload;
        },
        createItem: (state) => {
            // const value = state.value
            // state.value = [...value, action.payload]
            // Extract the newItem from state and add it to the list with a new UUID
            const newItem = { ...state.newItem, id: uuidv4() };
            state.value = [...state.value, newItem];
            // Clear the newItem property after adding it to the list
            state.newItem = singleItem;
        }
    }
})

export const {saveNewItem, createItem} = addItem.actions
export default addItem.reducer