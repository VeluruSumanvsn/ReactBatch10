import React, { useCallback, useState } from "react";


function Practice() {
  const[count, setCount] = useState(0);

  const handleClick = useCallback(() =>{
    setCount(count + 1);
  },[count])
  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default Practice;
