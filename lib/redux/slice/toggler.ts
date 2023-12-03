import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface TogglerState {
    value: boolean;
}

const initialState: TogglerState = {
    value: false,
}

export const togglerSlice = createSlice({
    name: 'toggler',
    initialState,
    reducers: {
        toggle: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
    }
})

export const {toggle} = togglerSlice.actions
export default togglerSlice.reducer