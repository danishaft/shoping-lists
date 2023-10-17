import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ItemState {
    value: object;
}

const initialState: ItemState = {
    value: {}
}

export const addItem = createSlice({
    name: 'addItems',
    initialState,
    reducers: {
        createItem: (state, action: PayloadAction<object>) => {
            state.value = action.payload
        }
    }
})

export const {createItem} = addItem.actions
export default addItem.reducer