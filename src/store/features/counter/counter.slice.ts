import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICounter {
    count: number;
}

const initialState: ICounter = {
    count: 10
}

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action: PayloadAction<{ value: number }>) => {
            state.count += action.payload.value;
        }

    }
})


export default CounterSlice;
export const { increment, decrement, reset, incrementByAmount } = CounterSlice.actions;