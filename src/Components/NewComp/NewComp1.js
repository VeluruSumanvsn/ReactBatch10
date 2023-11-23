import  {React} from "react";

function NewComp1 (props){
    return(
    
        <div>
            <h2> UI Training Batch 10 Classes</h2>
            <h2> Learning HTML & CSS</h2>
            <h2> Learning JS</h2>
            <h1>{props.name} Learning React</h1>
            <h1> at {props.company}</h1>
        </div>
    )
}
export default NewComp1;