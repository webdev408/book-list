import { useState } from 'react'
import './index.css'
import BookList from './components/BookList';
import Form from './components/Form';
import Home from './components/Home';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [books, setBooks]=useState([
    {
      id: 1,
      title: 'JavaScript Cookbook',
      author: 'Adam Scott',
      description: 'A book full of actionable solutions to common problems that we all face as JavaScript Developers.',
      soldOut: false
    },
    {
      id: 2,
      title: 'Learning PhP, MySql and JavaScript',
      author: 'Robin Nixon',
      description: 'A manual that covers step by step web development techniques in PhP and JavaScript including server .',
      soldOut: false
    }
  ])
  const [input, setInput] = useState({
    title: '',
    author: '',
    description: '',
    soldOut: false
  });
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBook = {
      id: crypto.randomUUID(),
      title: input.title,
      author: input.author,
      description: input.description,
      soldOut: false
    }
    if (edit) {
      // update book
      const copy = [...books]
      copy[active] = newBook
      setBooks(copy)
      setEdit(false)
      setActive(null)
    } else {
    setBooks([...books, newBook])
    }
    setInput({
      id: '',
      title: '',
      author: '',
      description: '',
      soldOut:false
    })
  }

  const handleToggle = (index) => {
    const newBook = [...books]
    newBook[index].soldOut =!newBook[index].soldOut
    setBooks(newBook)
  }

  const handleEdit = (index) => {
    const editedBook = books[index]
    setInput({
      id: editedBook.id,
      title: editedBook.title,
      author: editedBook.author,
      description: editedBook.description,
      soldOut: editedBook.soldOut
    })
    setEdit(true)
    setActive(index)
  }

  const handleDelete = (id) => {
    const newBooks = books.filter((book) => book.id!== id)
    setBooks(newBooks)
  }

  return (
      <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form handleChange={handleChange} handleSubmit={handleSubmit} edit={edit} input={input}  />} />
        <Route path="/booklist" element={<BookList books={books} handleToggle={handleToggle} handleEdit={handleEdit} handleDelete={handleDelete} />} />
      </Routes>
      </div>
  )
}

export default App;
