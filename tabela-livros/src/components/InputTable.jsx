import { useState } from "react";

export function InputTable({ setBooksInfo }) {
  const [nameBook, setNameBook] = useState('');
  const [authorBook, setAuthorBook] = useState('');

  const setNewBook = () => {
    const newBook = {
      id: Date.now().toString(),
      author: authorBook,
      title: nameBook
    }

    if(authorBook !== '' && nameBook !== '') {
      setBooksInfo(newBook);
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
    </>
  );
}