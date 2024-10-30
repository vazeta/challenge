import React, { useState, useEffect } from "react";

const FilterBar = ({ books, onFilter }) => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");

    useEffect(() => {
        const allGenres = books
            .flatMap(book => book.genre.split(",").map(genre => genre.trim()))
            .filter(genre => genre); 
        const uniqueGenres = Array.from(new Set(allGenres)); 
        setGenres(uniqueGenres);
    }, [books]);

    const handleFilterChange = (genre) => {
        setSelectedGenre(genre);
        if (genre === "") {
            onFilter(() => true); 
        } else {
            onFilter(book => {
                const bookGenres = book.genre.split(",").map(g => g.trim().toLowerCase());
                return bookGenres.includes(genre.toLowerCase());
            });
        }
    };

    return (
        <div style={{
            width: '200px',
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#2c3e50',
            borderRadius: '5px',
            color: '#ffffff',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
            position: 'absolute',
            left: '20px',
            top: '142px',
        }}>
            <h3>Filtrar por Género</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li
                    onClick={() => handleFilterChange("")}
                    style={{
                        cursor: 'pointer',
                        marginBottom: '10px',
                        color: selectedGenre === "" ? '#64b627' : '#ffffff'
                    }}
                >
                    Todos os Géneros
                </li>
                {genres.map((genre, index) => (
                    <li
                        key={index}
                        onClick={() => handleFilterChange(genre)}
                        style={{
                            cursor: 'pointer',
                            marginBottom: '10px',
                            color: selectedGenre === genre ? '#64b627' : '#ffffff'
                        }}
                    >
                        {genre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterBar;
