import React,{Component} from "react";
class Footer extends Component{
    constructor(props){
        super(props);
        this.state ={
            data: false,
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then(data =>{
            this.setState({
                data: data
            })
        })
    }

render(){
    const {data} = this.state;
    return(
        <div>
          {data && (
            <div className="row">
                {data.map(item =>(
                    <div className="col-md-3">
                   <img src={item.thumbnailUrl}/>
                   </div>
                ))}
            </div>
          )}
        </div>
    )
}
}
export default Footer;