import React from 'react';
import Cricket from './Cricket';
import "./Table.css"

function Table(props) {
    let telMarks=Number(props.tel);
    let hindMarks=Number(props.hind);
    let engMarks=Number(props.eng);
    let mathsMarks=Number(props.maths);
    let sciMarks=Number(props.sci);
    let socMarks=Number(props.soc);
    let totalMarks=telMarks+hindMarks+engMarks+mathsMarks+sciMarks+socMarks;
    let perc=(totalMarks/600)*100;
    perc=perc.toFixed(2);

  return (
    <div className='firsDiv'>
        <div className='parent'>
        <table>
           <caption>{props.name} Marks Sheet</caption>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Maximum Marks</th>
            <th>Marks Obtained</th>
            <th>Results</th>
            <th>Remarks</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th className="subject">Telugu</th>
            <td>100</td>
            <td>{telMarks}</td>
            <td>{telMarks>=35?"pass":"fail"}</td>
            
            <td className='remark' rowSpan={7}>{props.rmk}</td>
          </tr>
          <tr>
            <th className="subject">Hindi</th>
            <td>100</td>
            <td>{hindMarks}</td>
            <td>{hindMarks >=35?"pass":"fail"}</td>
           
          </tr>
          <tr>
            <th className="subject">English</th>
            <td>100</td>
            <td>{engMarks}</td>
            <td>{engMarks>=35?"pass":"fail"}</td>
            
          </tr>
          <tr>
            <th className="subject">Mathematics</th>
            <td>100</td>
            <td>{mathsMarks}</td>
            <td>{mathsMarks>=35?"pass":"fail"}</td>
            
          </tr>
          <tr>
            <th className="subject">Science</th>
            <td>100</td>
            <td>{sciMarks}</td>
            <td>{sciMarks>=35?"pass":"fail"}</td>
            
          </tr>
          <tr>
            <th className="subject">Social</th>
            <td>100</td>
            <td>{socMarks}</td>
            <td>{socMarks>=35?"pass":"fail"}</td>
           
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <th className="subject">Total</th>
            <td>100</td>
            <td>{totalMarks}({perc})%</td>
            <td>Pass</td>        
          </tr>
          </tfoot>
      </table>
        </div>
        <Cricket />
    </div>
  )
}

export default Table