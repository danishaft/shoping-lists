import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { itemData } from '@/utils/data';
import { Item } from '@/utils/interfaces';


const initialState = {
    value: itemData
}

export const addItem = createSlice({
    name: 'addItems',
    initialState,
    reducers: {
        createItem: (state, action: PayloadAction<Item>) => {
            const value = state.value
            state.value = [...value, action.payload]
        }
    }
})

export const {createItem} = addItem.actions
export default addItem.reducer