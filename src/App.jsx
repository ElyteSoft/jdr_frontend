import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import SearchBar from './components/SearchBar.jsx';
import InhumadosTable from './components/InhumadosTable.jsx';
import LoadingView from './components/Loading.jsx';

function App() {

  const [inhumadosResponse, setInhumadosResponse] = useState([]); // This is the response from the API
  const [term, setTerm] = useState(''); // This is the search term
  const [isLoading, setIsLoading] = useState(false); // This is the loading state

  const handleSearch = (e) => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/inhumados/${term}`)
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
  
  return (
    <>
      <SearchBar handleSearch={handleSearch} handleChange={handleChange} />
      <br />
      {isLoading ? <LoadingView /> : <InhumadosTable inhumados={inhumadosResponse} />}

    </>
  )
}

export default App

// Sample response from http://localhost:3000/inhumados
// {
//   "id": "789",
//   "numero_cuenta": "123",
//   "nombre_inhumado": "Jane Doe",
//   "jardin": "Garden 2",
//   "sector": "Sector B",
//   "fraccion": "Fraction 2",
//   "nombre_propietario": "John Doe"
// }
