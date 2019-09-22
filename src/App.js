import React from 'react';
import './App.css';
import Car from './Car/Car';
import Btn from "./Components/MaterialButton/MaterialButton";
import Card from  "./Components/MaterialCard/MaterialCard"


function App() {
  return (
    <div className="App"  style={{width: "60%", margin: "auto"}}>
      <Card title={'Buttons'}>
        <Btn className={'primary uppercase'} >textA</Btn>
        <Btn className={'primary uppercase'} disabled="disabled">textA</Btn>
        <br/>
        <Btn className={'outline'}>textA</Btn>
        <Btn className={'outline'} disabled="disabled">textA</Btn>
        <br/>
        <Btn className={'text'}>textA</Btn>
        <Btn className={'text'} disabled="disabled">textA</Btn>
      </Card>
      <Card title={'Inputs'}>
        
      </Card>      
      <Card title={'Dropdowns'}>
        
      </Card>      
    </div>
  );
}

export default App;
