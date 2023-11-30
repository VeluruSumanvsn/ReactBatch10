import React, { useState } from 'react'

function Cricket() {
    let [score, setScore]=useState(0);
    let [wicket,setWicket]=useState(0);
  return (
    <div>
        <h1>{score}/{wicket}</h1>
        <button onClick={()=>{
            setScore(score+1);
        }}>score</button>
        <button onClick={()=>{
            setWicket(wicket+1);
        }}>wicket</button>
    </div>
  )
}

export default Cricket