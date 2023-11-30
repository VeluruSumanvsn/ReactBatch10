import React, { useState } from "react";
 import "./counter.css";

function Counter(){
    const[count,setCount]=useState(0);
    const increase=()=>{
        setCount(count + 1)
    }
    const decrease=()=>{
        setCount(count -1)
    }
    const reset=()=>{
        setCount(0)
    }
    return (
        <div className="counter-container">
            <h1 className="counter">{count}</h1>
            <button  className="button" onClick={increase}>increase</button>
            <button  className="button" onClick={reset}>reset</button>
            <button  className="button" onClick={decrease}>decrease</button>
        
        </div>
    )
}
export default Counter;