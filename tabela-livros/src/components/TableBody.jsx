export function TableBody({ booksInfo }) {
  return (
    <tbody>
      {booksInfo.map((book, index) => (
        <tr key={book.id || index}>
          <td>Livro {index + 1}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>
            <button type="submit" className="botao remover">
              Remover
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}