import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

// ENV Variables

const API_URL = import.meta.env.VITE_JDR_SERVER_URL;

// Components
import SearchBar from './components/SearchBar.jsx';
import InhumadosTable from './components/InhumadosTable.jsx';
import LoadingView from './components/Loading.jsx';

function App() {

  const [inhumadosResponse, setInhumadosResponse] = useState([]); // This is the response from the API
  const [term, setTerm] = useState(''); // This is the search term
  const [isLoading, setIsLoading] = useState(false); // This is the loading state
  const [toggleState, setToggleState] = useState(false); // This is the toggle state

  const [category, setCategory] = useState('inhumados'); // This is the category to search for [nombre, propietario

  const handleSearch = () => {
    setIsLoading(true);
    axios.get(`http://${API_URL}/${category}/${term}`)
      .then((response) => {
        setInhumadosResponse(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      })
  }   

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setTerm(searchTerm);
  }

  const handleToggleChange = () => {
    setToggleState(!toggleState);
  }

  useEffect(() => {
      setCategory(toggleState ? 'clientes' : 'inhumados')
  }, [toggleState]);

  return (
    <>
      <SearchBar handleSearch={handleSearch} handleChange={handleChange} handleToggleChange={handleToggleChange} checked={toggleState} />
      <br />
      {isLoading ? <LoadingView /> : <InhumadosTable inhumados={inhumadosResponse} />}
    </>
  )
}

export default App
