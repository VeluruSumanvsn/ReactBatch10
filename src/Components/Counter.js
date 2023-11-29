import React, { useState } from "react";
// import styles from "./counter.css";

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
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>increase</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrease}>decrease</button>
        
        </div>
    )
}
export default Counter;