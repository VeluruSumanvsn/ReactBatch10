import React from "react";
import "./Table_list.css"

function List() {
return(
   <div className='container'>
       <div className='Table'>   

    <h1>Student Details</h1>
    <table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Ram</td>
        <td>12</td>
    </tr>
    <tr>
        <td>shyam</td>
        <td>21</td>
    </tr>
    <tr>
        <td>Hasini</td>
        <td>24</td>
    </tr>
    <tr>
        <td>Sai</td>
        <td>25</td>
    </tr>
</table> 
  </div> 
</div>
)
}

export default List


