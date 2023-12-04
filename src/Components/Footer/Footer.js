import React,{Component} from "react";
import SubFooter from "./SubFooter";

class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={
            name: "SALAAR"
        }
    }
render(){
    return(
        <div>
            {/* <h1>Class Based Component</h1>
            <h2>{this.state.name}</h2>
            <button onClick={()=> this.setState({name: "KGF"})}>Add</button> */}
            <SubFooter name="Good Morning"/>
        </div>
    )
}
}
export default Footer;