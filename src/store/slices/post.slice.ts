import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

export interface IPosts {
    id: number | string; title: string; content: string;
}

const initialState: IPosts[] = [
    { id: 1, title: 'Redux toolkit training', content: 'Learning ReduxToolkit with TypeScript' },
    { id: 2, title: 'Slices training', content: 'Like taking a slice of Pie with TypeScript' }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer:(state, action: PayloadAction<IPosts>) =>{
                state.push(action.payload);
                return state;
            },
            prepare:(title, content)=> {
                return {
                    payload: {
                        id: nanoid(),
                        title, content
                    }
                }
            }
        }
    }
});

export const { postAdded } = postSlice.actions;
export default postSlice;