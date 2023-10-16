import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import ItemReducer from '../slice/addItem'

export const store = configureStore({
    reducer: {
        items :ItemReducer
    },
})

// Types
const ReduxTypes = {}

export type Store = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action
>