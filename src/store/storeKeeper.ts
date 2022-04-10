import {configureStore, compose} from '@reduxjs/toolkit';
import { RootReducer } from './features/rootReducer';
// import CounterSlice from './features/counter/counter.slice';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//export const storeKeeper = createStore(null,composeEnhancers());

export const storeKeeper = configureStore({
    reducer:RootReducer,
    enhancers: composeEnhancers,
    devTools: true,
})