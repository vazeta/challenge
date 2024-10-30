import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
        setSearchTerm('');
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <input
                type="text"
                placeholder="Pesquisar livros (pelo título)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    backgroundColor: '#CEDAE1',
                    width: '680px',
                    padding: '10px',
                    borderRadius: '20px',
                    border: '1px solid #CEDAE1',
                    marginRight: '10px',
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#0093C9',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                }}
            >
                Pesquisar
            </button>
        </div>
    );
};

export default SearchBar;
