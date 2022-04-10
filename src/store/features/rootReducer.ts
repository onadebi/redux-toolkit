import {combineReducers} from '@reduxjs/toolkit'
import CounterSlice from './counter/counter.slice'

export const RootReducer = combineReducers({
    counter: CounterSlice.reducer
})

export type RootState = ReturnType<typeof RootReducer>;