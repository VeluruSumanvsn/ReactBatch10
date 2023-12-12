import React from "react";
import Table from "./Form/Table";
import Table_list from "./Table_list/Table_list";
import { Link } from "react-router-dom";

const List = () =>{
    return(
        <>
        {/* Keep this home button some where in your page to come back to home page!! */}
      <Link className='text-link' to='/'>Home</Link>
        <Table name="vanaja" tel="87" hind="86"
         eng="70" maths="86" sci="85" soc="91" rmk="Good"/> 
         <Table_list></Table_list>    
        </>
    )
}

export default List;