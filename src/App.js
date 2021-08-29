import { useState } from 'react';
import './App.css';
import {Form} from './form/Form'
import {Output} from './form/Output'

function App() {

  const [values, setValues] = useState("")

  // this is for lifting state up
  const gettingFormValues =(Formvalues)=>{
    console.log(Formvalues);

    setValues({...Formvalues});
    
    console.log(values);
  }

  return (
    <div className="App">
      <Form onSubmitData={gettingFormValues}/>
      {
        (values !== "") ? <Output sendingData={values}/> : ""
      }
    </div>
  );
}

export default App;
