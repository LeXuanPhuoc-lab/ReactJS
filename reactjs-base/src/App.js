import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';

function App() {
  const API_URL = "http://localhost:3500/items";

  // Init useState with a list of object 
  const [items, setItems] = useState([]);

  // Catch fetch error 
  const [fetchError, setFetchError] = useState(null);

  // loading data
  const [isLoading, setIsLoading] = useState(true);

  // Asyncronous function
  useEffect(() => {
    // Loading at load time     
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive data");
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        // console.log(err.message);
        setFetchError(err.message);
      } finally
      {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 1000);
  }, []);

  // Search Items 
  const [search, setSearch] = useState('');

  // Add Items 
  const [newItem, setNewItem] = useState('');

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    // Add data to DB
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);
    if(!result) setFetchError(result);
  };

  // Handle check 
  const handleCheck = (id) => {
    var listItems = items.map((item) => item.id === id
      ? { ...item, checked: !item.checked }
      : item);
    setItems(listItems);

    var myItem = listItems.filter(x => x.id === id);
    console.log(myItem);
    // Update status
    var patchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    var reqUrl = `${API_URL}/${id}`;
    var result = apiRequest(reqUrl, patchOptions);
    if(!result) setFetchError(result);
  };

  // Handle delete button 
  const handleDelete = (id) => {
    var listItems = items.filter((item) => item.id !== id);

    // Delete data in DB
    var deleteOptions = {
      method: 'DELETE'
    };
    var deleteUrl = API_URL + `/${id}`;

    var result = apiRequest(deleteUrl, deleteOptions);
    if(!result) if(!result) setFetchError(result);

    // Update data in items list
    setItems(listItems);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);

    // Add item 
    addItem(newItem);
    // Set text to empty 
    setNewItem(``);
  };

  return (
    <div className="App">
      <Header title="Goceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {fetchError && <p style={{color: "red"}}>Error: {fetchError}</p>}
        {isLoading && <p>Loading Items...</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer
        items={items}
      />
    </div>
  );
}

export default App;
