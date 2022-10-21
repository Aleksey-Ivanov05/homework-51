import React, {useState} from 'react';
import './App.css';
import Ball from "./Ball/Ball";

function App() {
  const [value, setValue] = useState([
    {number: 0},
    {number: 0},
    {number: 0},
    {number: 0},
    {number: 0},
  ]);

  const getRandomValueFromArray = (array:number[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const number = array[randomIndex];
    array.splice(randomIndex, 1);
    return number;
  };

  const getNumbers = () => {
    const numbers = [];
    for (let i = 5; i < 37; i++) {
      numbers.push(i);
    }
    const fiveNumbers = [];
    for (let i = 0; i < 5; i++) {
      const number = getRandomValueFromArray(numbers);
      fiveNumbers.push(number);
    }
    fiveNumbers.sort((a:number, b:number) => {
      return a - b;
    });

    setValue([
      {number: fiveNumbers[0]},
      {number: fiveNumbers[1]},
      {number: fiveNumbers[2]},
      {number: fiveNumbers[3]},
      {number: fiveNumbers[4]},
    ])
  };

  return (
    <div className="App">
        <button type="button" className="new" onClick={getNumbers} >New numbers</button>
        <div className="container">
          <Ball number={value[0].number}/>
          <Ball number={value[1].number}/>
          <Ball number={value[2].number}/>
          <Ball number={value[3].number}/>
          <Ball number={value[4].number}/>
        </div>
    </div>
  );
}

export default App;
