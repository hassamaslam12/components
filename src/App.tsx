
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Table from './components/Table';

function App() {
  const [submit,setSubmitted] = useState(false);


  const table =[
    { 
      id:1,
      name:"Hassam",
      fatherName:"Aslam",
      age:21,
      gender:"Male",
    },
    { 
      id:2,
      name:"hassan",
      fatherName:"mushtaq",
      age:20,
      gender:"Male",
    },
    { 
      id:3,
      name:"zubair",
      fatherName:"shahid",
      age:19,
      gender:"Male",
    },
    { 
      id:4,
      name:"waleed",
      fatherName:"ahmed",
      age:19,
      gender:"Male",
    },
    { 
      id:5,
      name:"munir",
      fatherName:"kashif",
      age:19,
      gender:"Male",
    },
    { 
      id:6,
      name:"zain",
      fatherName:"ameen",
      age:19,
      gender:"Male",
    },
  ]

  const tableKeys = Object.keys(table[0]);


  return (
    <div>
        {!submit && <><Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Father Name" /><br />
        <Input type="text" placeholder="Age" />
        <Input type="text" placeholder="Gender" /><br />
        <Button btnValue="Submit" /></>}
        {submit && <h1>Form Submitted</h1>}
        <Table table={table} tableKeys={tableKeys}/>
    </div>
  );
}

export default App;
