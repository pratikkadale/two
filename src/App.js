// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Nav from './components/Nav';
import Textfile from './components/Textfile';
import About from './components/About';
import React,{useState} from 'react'
// import { Alert } from 'bootstrap/dist/js/bootstrap';
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router-dom/dist';

function App() {
  
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been Enabled","success");
      
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    }

  }

    const [alert, setAlert] = useState(null)

    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 2000);

    }

  return (

    <>
    <Router> 
      <Nav title="TextUtilty" mode={mode} togglemode={toggleMode}/>
      <Alert alert={alert}/> 

        <Routes>
              <Route path="/about" element={<About/>}/>
              <Route exact path="/" element={<Textfile heading="Enter the text in box" mode={mode}/>}/>     
        </Routes>   
        
    </Router>
    
    </>
  );
}
    
export default App;
