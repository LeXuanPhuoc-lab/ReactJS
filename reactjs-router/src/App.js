import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NewPost from './Components/NewPost';
import PostPage from './Components/PostPage';
import About from './Components/About';
import Missing from './Components/Missing';
import EditPost from './Components/EditPost';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

function App() {

  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  // Fetch data at load time 
  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);


  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home 
          isLoading={isLoading}
          fetchError={fetchError}/>} 
        />
        <Route exact path="/post" element={<NewPost />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
        <Route exact path="/post/:id" element={<PostPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/missing" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
