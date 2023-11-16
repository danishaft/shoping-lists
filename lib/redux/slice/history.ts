import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { History} from '@/utils/interfaces';

const initialState: {historyList: History[]} = {
    historyList: []
}

export const historyList = createSlice({
    name: 'historyList',
    initialState,
    reducers: {
        saveToHistoryList: (state, action: PayloadAction<History>) => {
            const value = state.historyList
            state.historyList = [...value, action.payload]
        }
    }
})

export const {saveToHistoryList} = historyList.actions
export default historyList.reducer