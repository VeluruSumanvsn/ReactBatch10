import React from "react";

function Practice(){
    return(

        <div>
            <h2>UI Practice</h2>
            <p>Planning to become a React Developer</p>
            <button onClick={()=>{alert('I am also dev')}}>click me..!</button>
            <div>
                <p>
                    React_Practise
                </p>
                <a href="#" onClick={()=>{alert("Hello I am UI dev")}}>Hello</a>
            </div>
        </div>
    )
};

export default Practice;