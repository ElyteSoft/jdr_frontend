import { useEffect, useState } from "react";

const TABLE_HEADERS = ["Número de Cuenta", "Nombre del inhumado", "Nombre del Propietario", "Jardín", "Sector", "Fracción"];

const Table = (inhumadosList) => {
  const [displayingList, setDisplayingList] = useState([]);

  useEffect(() => { 
    setDisplayingList(inhumadosList.inhumados);
    console.log(inhumadosList.inhumados);
  }, [inhumadosList]);
  
  return (
    <div className="overflow-x-auto shadow-md rounded-lg m-4">
      <table className="table-auto w-full">
        <thead className="bg-gray-800">
          <tr className="bg-gray-800 text-gray-100 text-sm rounded-lg l">
            {TABLE_HEADERS.map((header, index) => (
              <th key={index} className="py-3 px-6 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-800 bg-gray-200 text-sm font-medium">
          {displayingList.length > 0? displayingList.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{row.cuenta}</td>
              <td className="py-3 px-6 text-left">{row.nombre}</td>
              <td className="py-3 px-6 text-left">{row.nombre_propietario}</td>
              <td className="py-3 px-6 text-left">{row.codigo_jardin} - {row.jardin}</td>
              <td className="py-3 px-6 text-left">{row.sector}</td>
              <td className="py-3 px-6 text-left">{row.fraccion}</td>
            </tr>
          )) : <tr><td className="py-3 px-6 text-center" colSpan={6}>Realice una nueva búsqueda</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// [
//   {
//       "cuenta": "0F24750",
//       "inhumacion_traslado": "56844",
//       "id": "1",
//       "corr": "0",
//       "fecha_servicio": "5/23/2020",
//       "jardin": "JAPONES",
//       "codigo_jardin": "13",
//       "sector": "007",
//       "letra_1": "",
//       "fraccion": "044",
//       "letra_2": "A",
//       "columna": "00",
//       "nombre": "CARCAMO CORDOVA MARIA ELBA LETICIA",
//       "numero_traslado": "00000",
//       "fecha_traslado": "0",
//       "tipo_traslado": "0",
//       "fecha_defuncion": "5/22/2020",
//       "cuentra_anterior": ""
//   },
