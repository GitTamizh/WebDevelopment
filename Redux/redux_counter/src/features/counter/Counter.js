import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <h1>Counter <span>
                <p className="value">{count}</p></span></h1>
        <div className="button-container">
            <button  className="btn increase" style={{color:"green"}} onClick={() => dispatch(increment())}>Increase</button>
            <button className="btn decrease"  style={{color:"red"}} onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <div className="container">
            <input 
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)} 
            />
        </div>
            

        <div className="button-container">
            <button  className="btn add"onClick={() => dispatch(incrementByAmount(addValue))}>Add</button>
            <button  className="btn reset" onClick={resetAll}>Reset</button>
        </div>
        </section>
    );
};

export default Counter;
