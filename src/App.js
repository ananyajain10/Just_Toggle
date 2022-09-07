import './App.css';
import React from 'react'
import Data from './Data'
import Boxes from './Boxes'
function App() {
  const [Box , setBox]= React.useState(Data)
  function toggle(id){
    setBox(preBox => {
      return preBox.map( squares => {
        return squares.id === id ? {...squares , on : !squares.on} : squares
      })
    })
  }
  const squareElement = Box.map(square => (
      <Boxes 
       key = {square.id}
       on={square.on}
       toggle ={() => toggle(square.id)}
       />
  ))
  return (
    <div className="App">

     {squareElement}
    </div>
  );
}

export default App;
