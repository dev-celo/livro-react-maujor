import { useState } from "react";
import { TableBody } from "./TableBody";

export function InputTable() {
  const [nameBook, setNameBook] = useState('');
  const [authorBook, setAuthorBook] = useState('');
  const [booksInfo, setBooksInfo] = useState([]);

  const setNewBook = () => {
    const newBook = {
      id: Date.now().toString(),
      author: authorBook,
      title: nameBook
    }

    if(authorBook !== '' && nameBook !== '') {
      setBooksInfo((prevBooks) => [...prevBooks, newBook]);
    }

    setNameBook('');
    setAuthorBook('');
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Título do livro"
          onChange={(event) => setNameBook(event.target.value)}
        />

        <input
          type="text"
          name="author"
          id="author"
          placeholder="Autor do livro"
          onChange={(event) => setAuthorBook(event.target.value)}
        />

        <button type="button" onClick={() => setNewBook()}>
          Enviar
        </button>
      </form>
      <TableBody booksInformation={booksInfo} />
    </>
  );
}