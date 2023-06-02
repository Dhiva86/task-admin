/* eslint-disable react/style-prop-object */
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './Component/Dashboard';
import Button from './Component/Button';
import Cards from './Component/Cards';





function App() {

  return (
  
    <div className="App">
      <h3>Select the Components</h3>
      <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      </Routes>
       <Routes>
      <Route  path="/buttons" element={<Button/>}/>
      </Routes>
      <Routes>
      <Route  path="/cards" element={<Cards/>}/>
      </Routes>
      
      
    </div>
   


  );
}

export default App;
