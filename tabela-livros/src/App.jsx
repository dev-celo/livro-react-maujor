import { useState } from "react";
import { InputTable } from "./components/InputTable";
import { TableFoot } from "./components/TableFoot";
import { TableHead } from "./components/TableHead";
import { TableBody } from "./components/TableBody";

function App() {
  const [booksInfo, setBooksInfo] = useState([]);

  const handleAddBooks = (newbook) => {
    setBooksInfo((prev) => [...prev, newbook]);
  }

  return (
    <>
      <InputTable setBooksInfo={ handleAddBooks } />
      <table className="tabela">
        <TableHead />
        <TableBody booksInfo={booksInfo} />
        <TableFoot />
      </table>
    </>
  );
}

export default App;
