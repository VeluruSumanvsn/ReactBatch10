import React, { useState } from "react";

 function NewComp(){
    const[count, setCount] = useState(1);
    
    const aaa = () =>{
        setCount(count + 1); // 1 + 1 = 2
    }
    const bbb = () =>{
        setCount(count - 1);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={aaa}>Increment</button>
            <button onClick={bbb}>Decrement</button>

        </div>
    )

}
export default NewComp;

//useState
//useEffect
//useRef
//useReducer
//useMemo
//useCallbaCK
//useContext