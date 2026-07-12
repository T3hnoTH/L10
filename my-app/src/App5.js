import {useState,  useEffect, useRef, useMemo, useCallback } from 'react';
import ItemList from "./components/ItemList.js";
import './App.css';
 
function App() {
 
  const [counter, setCounter] = useState(0);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "red" : "black"
  }

  // const getItems = () => {
  //   return Array(counter).fill('').map((_, i) => `Element ${i + 1}`);
  // }

  const getItems = useCallback(() => {
    return Array(counter).fill('').map((_, i) => `Element ${i + 1}`);
  }, [counter])

  return (
    <div className="App">
      <h1>L08. Хуки</h1>
      <h2>useCallback</h2>
      <hr />
      <h4>counter: {counter}</h4>
      <hr />
   
      <h4 style={styles}>counter: {counter}</h4>
      <button type="button" className="btn btn-success" onClick={() => setCounter(counter + 1)}>+</button>
      <button type="button" className="btn btn-danger" onClick={() => setCounter(counter - 1)}>-</button>
      <button type="button" className="btn btn-primary" onClick={() => setColored(!colored)}>Change Color</button>
      <hr />
      <ItemList getItems={getItems}/>
   
    </div>
  );
}
 
export default App;
 
 