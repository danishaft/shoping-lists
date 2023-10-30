import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import {persistedReducer} from "./rootReducer"
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'



export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})
export const persistor = persistStore(store)

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