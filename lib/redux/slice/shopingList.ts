
import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Item } from '@/utils/interfaces';

const initialState: {list: Item[]} = {
    list: []
}

export const shoppingList = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<Item>) => {
            const value = state.list
            state.list = [...value, action.payload]
        }
    }
})

export const {addToList} = shoppingList.actions
export default shoppingList.reducer