import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import SearchBar from './components/SearchBar.jsx';
import InhumadosTable from './components/InhumadosTable.jsx';

function App() {

  const [inhumadosResponse, setInhumadosResponse] = useState([]); // This is the response from the API
  const [inhumados, setInhumados] = useState([]); // This is the list of inhumados to display

  useEffect(() => {
    axios.get('http://localhost:3000/inhumados')
        .then(res => {
          setInhumados(res.data);
          setInhumadosResponse(res.data);
        })
        .catch(err => console.log(err))
      }, []);
  
    const handleChange = (e) => {
      const term = e.target.value;
      let filteredInhumados;
      
      if (term === '') {
        // If searchTerm is empty, show all inhumados
        filteredInhumados = inhumadosResponse;
      } else {
        // If searchTerm is not empty, filter inhumados
        filteredInhumados = inhumadosResponse.filter(inhumado => {
          return inhumado.nombre_inhumado.toLowerCase().includes(term.toLowerCase()) || 
                 inhumado.nombre_propietario.toLowerCase().includes(term.toLowerCase());
        });
      }
      
      setInhumados(filteredInhumados);
    }
    
    
  
  return (
    <>
      <SearchBar handleChange={handleChange} />
      <br />
      <InhumadosTable inhumadosList={inhumados} />
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
