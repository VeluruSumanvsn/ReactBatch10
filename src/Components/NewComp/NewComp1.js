import  {React} from "react";

function NewComp1 (props){
    // console.log(props);
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.heading}</p>
        </div>
    )
}
export default NewComp1;