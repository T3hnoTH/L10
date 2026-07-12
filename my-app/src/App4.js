import {useState,  useEffect, useRef, useMemo } from 'react';
import './App.css';
 
const calcl = (num) => {
  console.log("call calcl")
  let i = 0;
  while(i < 1000000000) i ++;
  return num * 2
}
 
function App() {
 
  const [counter, setCounter] = useState(0);
  const [colored, setColored] = useState(false);

  // const calculatedValue = calcl(counter);
  const calculatedValue = useMemo(() => {return calcl(counter)}, [counter])
  // const styles = {
  //   color: colored ? "red" : "black"
  // }
  const styles = useMemo(() => {
    return {color: colored ? "red" : "black"}
  }, [colored])

  useEffect(() => {
    console.log('styles changed')
  }, [styles])

  return (
    <div className="App">
      <h1>L08. Хуки</h1>
       <h2>UseMemo</h2>
      <hr />
      <h4>counter: {counter}</h4>
      <hr />
   
      <h4 style={styles}>counter: {counter}</h4>
      <button type="button" className="btn btn-success" onClick={() => setCounter(counter + 1)}>+</button>
      <button type="button" className="btn btn-danger" onClick={() => setCounter(counter - 1)}>-</button>
      <button type="button" className="btn btn-primary" onClick={() => setColored(!colored)}>Change Color</button>
      <hr />
      <h4>calculatedValue: {calculatedValue}</h4>
   
    </div>
  );
}
 
export default App;
 
 