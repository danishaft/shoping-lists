import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Item } from '@/utils/interfaces';

const initialState: {historyList: Item[]} = {
    historyList: []
}

export const historyList = createSlice({
    name: 'historyList',
    initialState,
    reducers: {
        saveToHistoryList: (state, action: PayloadAction<Item[]>) => {
            const value = state.historyList
            state.historyList = action.payload
            console.log(state.historyList)
        }
    }
})

export const {saveToHistoryList} = historyList.actions
export default historyList.reducer