import { useState } from 'react';
import './App.css';

function calcInitCounter(){
  console.log('calc counter')
  return Math.round(Math.random()*100)
}

function App() {

  // const counterState = useState(0);
  // console.log(`state: ${counterState}`)

  //const [counter, setCounter] = useState(calcInitCounter);
  const [counter, setCounter] = useState(() => calcInitCounter());
  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now(),
  });
  const [inputValue, setInputValue] = useState("s")


  const inc = () => {
    setCounter(counter + 1)
    //не работает второй раз
    //setCounter(counter + 1)

    setCounter((prevCounter) => {return prevCounter+1})
    setCounter(prev => prev + 1)
  }
  const dec = () => {
    setCounter(counter - 1)
  }

  const updateTitle = () => {
    setState(prev => {return {...prev, title: 'New TITLE!!!'}})
  }

  return (
    <div className="App">
      <h1>L9, Хуки</h1>
      <hr/>
      <button type="button" className="btn btn-success" onClick={inc}>+</button>
      <button type="button" className="btn btn-danger" onClick={dec}>-</button>
      <hr/>
      <h3>Value: {counter}</h3>

      <hr />
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setState({title: 'New TITLE!!!'})}>
          Change State
        </button>
        <button type="button" className="btn btn-danger" onClick={() => updateTitle}>change</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <hr/>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <br/>
      <h3>InputValue: {inputValue}</h3>
    </div>
  );
}

export default App;
