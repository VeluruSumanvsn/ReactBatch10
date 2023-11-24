import React from "react";
 import Sublist from "./Sublist"
class Unordered extends React.Component{
    state={
        course:"react"
    }
    render(){

        return(
            <div>
            <ul className ="container">
            <li>home </li>
            <li>about</li>
            <li>blog</li>

            <li>courses</li>
        </ul>
        <Sublist name={this.state.course}/> 
        
        </div>
        )
    }
}
export default Unordered;