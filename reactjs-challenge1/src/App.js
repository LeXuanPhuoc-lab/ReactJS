import { useEffect, useState } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';

function App() {

  const API_URL = "https://jsonplaceholder.typicode.com";
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => 
    {
      try{
        var response = await fetch(`${API_URL}/${reqType}`);
        var resultData = await response.json();
        setItems(resultData);
      }catch(err){
      }
    } 

    fetchItems();
  }, [reqType]);

  return (
    <div className='main'>
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />
      <Table items={items}/>
    </div>
  );
}

export default App;
