import { useState, useEffect } from 'react';
import './App.css';
 
 
function App() {
 
  const [typeDog, setTypeDog] = useState("boxer")
  const [data, setData] = useState([])
  const [pos, setPos] = useState({x: 0, y: 0})

  useEffect(() => {
      console.log('call render');
      fetch(`https://dog.ceo/api/breed/${typeDog}/images/random`)
        .then(res => res.json())
        .then(json => {
         
          setData(json)
        })
    }, [typeDog]);

   const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount');
    window.addEventListener('mousemove', mouseMoveHandler);
 
    return () => {
      console.log('ComponentWillUnmount');
      window.removeEventListener('mousemove', mouseMoveHandler);
    }
  }, []);
    
  return (
    <div className="App">
      <h1>L08. Хуки</h1>
      <hr />
      <button type="button" className="btn btn-success" onClick={() => setTypeDog("boxer")}>Boxer</button>
      <button type="button" className="btn btn-warning" onClick={() => setTypeDog("chow")}>Chow</button>
      <button type="button" className="btn btn-danger" onClick={() => setTypeDog("husky")}>Husky</button>
      <hr />
      <h3>Dog: {typeDog}</h3>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <hr />
        <img src={data.message} alt="dog" width={150}/>
    </div>
  );
}
 
export default App;
 