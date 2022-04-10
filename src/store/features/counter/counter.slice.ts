import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICounter {
    count: number;
}

const initialState: ICounter = {
    count: 0
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
            console.log(`New state from +1: ${state.count}`)
        },
        decrement: (state) => {
            state.count -= 1;
            console.log(`New state from -1: ${state.count}`)
        },
        reset: (state) => {
            state.count = 0;
            console.log(`New state from reset: ${state.count}`)
        },
        incrementByAmount: (state, action: PayloadAction<{ value: number }>) => {
            state.count += action.payload.value;
            console.log(`New state from increment by ${action.payload.value}: ${state.count}`)
        }

    }
})


export default CounterSlice;
export const { increment, decrement, reset, incrementByAmount } = CounterSlice.actions;