import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import AddRemoveButtons from './AddRemoveButtons';
import Logo from './JekLogo';
import DisplayBooks from './DisplayBooks';
import FilterBar from './FilterBar'; 

const App = () => {
    const [books, setBooks] = useState([]);
    const [displayedBooks, setDisplayedBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8000/');
            if (!response.ok) {
                throw new Error('Erro ao buscar os livros');
            }
            const data = await response.json();
            const updatedBooks = data.map(book => ({
                ...book,
                image: book.image ? `http://localhost:8000/media/${book.image}` : null,
            }));
            setBooks(updatedBooks);
            setDisplayedBooks(updatedBooks);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (searchTerm) => {
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDisplayedBooks(filteredBooks);
    };

    const handleFilter = (filterFunction) => {
        const filteredBooks = books.filter(filterFunction);
        setDisplayedBooks(filteredBooks);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div style={{ position: 'relative' }}>
            <Logo />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingLeft: '190px',
                paddingTop: '40px',
            }}>
                <h1 style={{ color: '#cedae1', marginRight: '40px', fontFamily: "papyrus, verdana, arial" }}>jeKlibrary</h1>
                <SearchBar onSearch={handleSearch} />
                <AddRemoveButtons onBookAdded={fetchBooks} />
            </div>
            <FilterBar books={books} onFilter={handleFilter} /> {}
            <div style={{ marginTop: '30px', paddingLeft: '270px', paddingRight: '20px' }}>
                <DisplayBooks books={displayedBooks} />
            </div>
        </div>
    );
};

export default App;
