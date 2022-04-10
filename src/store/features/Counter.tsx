import React, { FormEvent, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counter/counter.slice';
import { RootState } from './rootReducer';

const Counter = () => {
    const count = useSelector((state: RootState)=> state.counter.count)
    const [incrementVal, SetIncrementVal] = useState(() =>0);
    const dispatch = useDispatch();
    const handleIncrement =()=>{
        dispatch(incrementByAmount({value: incrementVal}));
    }
    const handleChange =(e: FormEvent<HTMLInputElement>)=>{
        const value = e.currentTarget.value;
        SetIncrementVal(isNaN(parseFloat(value)) ? 0 : parseFloat(value));
    }
  return (
    <div>Counter: {count}
    <p><input type="number" name="incrVal" id="incrVal" defaultValue={incrementVal} onChange={handleChange}/></p>
    <p><button onClick={handleIncrement}>Increment</button></p>
    <p><button onClick={()=> dispatch(decrement())} >Decrement</button></p>
    <p><button onClick={()=> dispatch(reset())}>Reset</button></p>
    </div>
  )
}

export default Counter