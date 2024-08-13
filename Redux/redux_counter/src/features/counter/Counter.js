import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <section>
            <h1>Counter <span>
                <p className="value">{count}</p></span></h1>
        <div className="button-container">
            <button  className="btn increase" style={{color:"green"}} onClick={() => dispatch(increment())}>Increase</button>
            <button className="btn decrease"  style={{color:"red"}} onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        </section>
    );
};

export default Counter;
