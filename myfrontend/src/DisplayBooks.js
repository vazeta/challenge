import React from 'react';

const DisplayBooks = ({ books }) => { 
    return (
        <div style={{ padding: '20px', backgroundColor: '#2c3e50', borderRadius: '5px' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {books.map((book, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <div style={{ flexGrow: 1, color: '#dce0df' }}>
                            <h3 style={{ color: '#ffffff' }}>{book.title}</h3>
                            <p>Autor: {book.author}</p>
                            <p>Género: {book.genre}</p>
                            <p>Data de Publicação: {book.published_date}</p>
                            <p>Nº de páginas: {book.n_pages}</p>
                        </div>
                        {book.image && (
                            <img
                                src={book.image}
                                alt={`Capa do livro ${book.title}`}
                                style={{ width: '150px', height: 'auto', marginLeft: '10px', marginRight: '20px' }}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayBooks;
