import React from 'react';
import NewComp1 from './Components/NewComp/NewComp1';
import NewComp from './Components/NewComp/NewComp';

function App(){ 
  return(
    <>
     <NewComp1 name="Rohit" heading="India" /> {/*here name and heading are props */ }
     <NewComp name="Vanaja"/>
    </>
  )
}
export default App;
