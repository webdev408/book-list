const BookList = ({books, handleToggle, handleEdit, handleDelete}) => {

	return (
		<div className="book-list">
        <hr />
        <h2 className='my-4 text-center'>My Programming Books</h2>
        {books.map((book, index) => (
          <div key={book.id} className="book" style={{textDecoration:book.soldOut ? "line-through":""}}>
          <h4 className="m-3">Title: {book.title}</h4>
          <p className="m-3">Author: {book.author}</p>
          <p className='m-2'>Description: {book.description}</p>
          <input type="checkbox" value={book.soldOut} onChange={(e)=>handleToggle(index,e.target.checked)}/>
          <button onClick={()=>handleDelete(book.id)} className='m-3'>Delete</button>
          <button onClick={()=>handleEdit(index)}>Edit</button>
          </div>
        ))}
    </div>
	)
}
export default BookList;