import { useEffect, useState } from "react";

const TABLE_HEADERS = ["ID", "Número de Cuenta", "Nombre del inhumado", "Jardín", "Sector", "Fracción", "Nombre del Propietario"];

const Table = (inhumadosList) => {
  const [displayingList, setDisplayingList] = useState([]);

  useEffect(() => { 
    setDisplayingList(inhumadosList.inhumadosList);
  }, [inhumadosList]);

  return (
    <div className="overflow-x-auto bg-gray-200 shadow-md rounded-lg m-4">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-800 text-gray-600 uppercase text-sm leading-normal">
            {TABLE_HEADERS.map((header, index) => (
              <th key={index} className="py-3 px-6 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {displayingList? displayingList.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              {Object.values(row).map((value, i) => (
                <td key={i} className="py-3 px-6 text-left whitespace-nowrap">{value}</td>
              ))}
            </tr>
          )) : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
