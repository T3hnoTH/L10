import {useState,  useEffect} from 'react'; 

export default function ItemList({getItems}) {
 
    const [items, setItems] = useState([]);
 
    useEffect(() => {
        console.log("update items")
        setItems(getItems());
    }, [getItems]);
 
 
  return (
    <ul>
      {
        items.map((curItem, index) => <li key={index}>{curItem}</li>)
      }
    </ul>
  );    
}