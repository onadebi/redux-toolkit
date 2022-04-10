import { combineReducers } from '@reduxjs/toolkit'
import postSlice from './slices/post.slice';

export const RootReducer = combineReducers({
    posts: postSlice.reducer,
})


export type RootState = ReturnType<typeof RootReducer>;

export const selectAllPosts = (state: RootState)=> state.posts;