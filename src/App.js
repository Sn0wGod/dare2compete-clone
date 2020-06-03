import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Cards/Card';
import data from './data';

function App() {
  return (
    <div className="App">
      <NavBar/>
     { data.data.map((res,index)=>(
        <Card key={index} props={res}/>
      ))}
    </div>
  );
}

export default App;
