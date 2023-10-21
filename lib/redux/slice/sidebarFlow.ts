import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FlowState {
    value: string;
}

const initialState: FlowState = {
    value: 'EditPage'
}

export const sidebarSlice = createSlice({
    name: 'activeSideBarPage',
    initialState,
    reducers: {
        switchSideBarPage: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const {switchSideBarPage} = sidebarSlice.actions
export default sidebarSlice.reducer