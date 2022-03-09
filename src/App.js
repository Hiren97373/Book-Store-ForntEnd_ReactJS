
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import AboutUs from './components/AboutUs';
import BookDetail from './components/Book/BookDetail';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/add' element={<AddBook />} exact />
          <Route path='/books' element={<Books />} exact />
          <Route path='/about' element={<AboutUs />} exact />
          <Route path='/books/:id' element={<BookDetail />} exact />
        </Routes>
      </main>
    </>

  );
}

export default App;
