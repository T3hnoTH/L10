import { useState, useEffect, useRef } from 'react';
import './App.css';
 
// let renderCount = 1;
 
function App() {
    
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("init");
  const renderCount = useRef(1);

  const prevValue = useRef("")

  const inputRef = useRef(null)

  useEffect(() => {
    //setRenderCount(prev => prev + 1);
    renderCount.current =renderCount.current +1 

    console.log(`render count: ${renderCount}`)
  });

  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <div className="App">
      <h1>L10. UseRef</h1>
      <hr/>

      <h3>Render count: {renderCount.current}</h3>
      <hr/>
      
      <input ref={inputRef} type='text' value={value} onChange={e => setValue(e.target.value)}/>

      <button type="button" className="btn btn-warning" onClick={() => inputRef.current.focus()}>Focus</button>
      <hr/>
      <h4>Previous value: {prevValue.current}</h4>
    </div>
  );
}
 
export default App;
 