import {useState,  useEffect, useRef, useMemo, useCallback } from 'react';
import ItemList from './components/ItemList';
import './App.css';
 
const useLogger = (value) => {
 
  useEffect(() => {
    console.log('Value changed:', value);
  }, [value]);  
}

const useInput = (initialValue) => {
 
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  }
 
  const clear = () => setValue('');
 

 
  return {
    bind: {value, onChange},
    value,
    onChange,
    clear
  }
}
 
 
function App() {
 
  /*
  const [userName, setUserName] = useState('user');
  const [userEmail, setUserEmail] = useState('');
*/
 
  const userName = useInput('user');
  const userEmail = useInput('');
  const userLogin = useInput('');
  useLogger(userName.value);
 
 
  return (
    <div className="App">
      <h1>L08. Хуки</h1>
       <h2>Custom Hook</h2>
      <hr />
     <input type="text" value={userName.value} onChange={userName.onChange} placeholder="Username" />
     <input type="text" {...userEmail.bind} />
     <input type="text" value={userLogin.value} onChange={userLogin.onChange} placeholder="Login" />
       
      <hr />
      <button type="button" className="btn btn-danger" onClick={() => {
        userName.clear();
        userEmail.clear();
        userLogin.clear();
      }}>Clear</button>
      <hr />
      <h4>Username: {userName.value}</h4>
      <h4>Email: {userEmail.value}</h4>
     <h4>Login: {userLogin.value}</h4>  
   
    </div>
  );
}
 
export default App;