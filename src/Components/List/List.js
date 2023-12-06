import React from "react";
import Table from "./Form/Table";
import Table_list from "./Table_list/Table_list";

const List = () =>{
    return(
        <>
        <Table name="vanaja" tel="87" hind="86"
         eng="70" maths="86" sci="85" soc="91" rmk="Good"/> 
         <Table_list></Table_list>    
        </>
    )
}

export default List;