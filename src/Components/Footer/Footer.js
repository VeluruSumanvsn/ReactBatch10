import React,{Component} from "react";
import SubFooter from "./SubFooter";
import { Link } from "react-router-dom";

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
            {/* Keep this home button some where in your page to come back to home page!! */}
      <Link className='text-link' to='/'>Home</Link>
            <SubFooter name="Good Morning"/>
        </div>
    )
}
}
export default Footer;