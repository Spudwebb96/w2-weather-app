import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import React, {useState} from "react";


function App() {

  const [location, setLocation] = useState('');
  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
