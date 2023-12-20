import React,{useRef} from "react";


const Body = () => {
  const inputRef = useRef(null);

  const handleClick = () =>{
    inputRef.current.focus();
  }
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>Click</button>
        </div>
    )
};

export default Body;
