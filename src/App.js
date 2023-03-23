//import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Main from './componets/Main';
import React,{useState} from 'react';
import Alert from './componets/Alert';
import About from './componets/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App(props) {
  const[mode,setMode]=useState('dark');
  const[color,setColor] = useState('white');
  const[alert,setAlert] = useState(null);

  const showAlert = (msg,type) => {
    setAlert({msg,type});
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }


  const togglemode=()=>{
   
      setMode('dark');
      setColor('white');
      document.body.style.backgroundColor = "#100022" ;
      showAlert("Light Mode is enabled","Success!");
  }
  const togglemode1=()=>{
  
      setMode('dark');
      setColor('white');
      document.body.style.backgroundColor = "green";
      document.title="Text manipulator-green Mode is enabled";
      showAlert("brown Mode is enabled","Success!");
    
  }

  const togglemode2=()=>{
     setMode('dark');
      setColor('black');
      document.body.style.backgroundColor = "pink" ;
      document.title="Text manipulator-Pink Mode is enabled";
      showAlert("Light Mode is enabled","Success!");
    }
  

  const togglemode3=()=>{
  
      setMode('dark');
      setColor('white');
      document.body.style.backgroundColor = "brown" ;
      document.title="Text manipulator-Brown Mode is enabled";
      showAlert("Dark Mode is enabled","Success!");
    }


  return (
   <>

<Router>
      
<Navbar mode={mode} color={color} togglemode={togglemode} togglemode1={togglemode1} togglemode2={togglemode2} togglemode3={togglemode3} />
   <Alert Alert={alert} />
      
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About showAlert={showAlert} color={color} />} >

            </Route>

            <Route exact path="/home" element={<Main showAlert={showAlert} color={color} />}>

            </Route>
          </Routes>


      </div>


      </Router>
      
 </>
  );
}

export default App;
