import React, { useState } from 'react';

const AddRemoveButtons = ({ onBookAdded }) => { 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        genre: '',
        published_date: '',
        n_pages: '',
        image: null,
    });
    const [bookToRemove, setBookToRemove] = useState(''); 

    const handleAdd = () => {
        setIsModalOpen(true);
    };

    const handleConfirmAdd = async () => {
        const formData = new FormData();
        formData.append('title', newBook.title);
        formData.append('author', newBook.author);
        formData.append('genre', newBook.genre);
        formData.append('published_date', newBook.published_date);
        formData.append('n_pages', newBook.n_pages);
        if (newBook.image) {
            formData.append('image', newBook.image);
        }

        try {
            const response = await fetch('http://localhost:8000/add/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setIsModalOpen(false);
                setNewBook({
                    title: '',
                    author: '',
                    genre: '',
                    published_date: '',
                    n_pages: '',
                    image: null,
                });
                onBookAdded(); 
            } else {
                alert("Erro ao adicionar livro");
            }
        } catch (error) {
            alert("Erro na requisição: " + error.message);
        }
    };

    const handleRemove = () => {
        setIsRemoveModalOpen(true); 
    };

    const handleConfirmRemove = async () => {
        try {
            const response = await fetch(`http://localhost:8000/delete/`, { 
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: bookToRemove }), 
            });

            if (response.ok) {
                alert("Livro removido com sucesso!");
                setBookToRemove(''); 
                setIsRemoveModalOpen(false); 
                onBookAdded(); 
            } else {
                alert("O nome do livro iserido não existe!");
            }
        } catch (error) {
            alert("Erro na requisição: " + error.message);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px' }}>
            <button 
                onClick={handleAdd} 
                style={{
                    padding: '10px 10px',
                    marginRight: '20px',
                    backgroundColor: '#64b627', 
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Adicionar livro
            </button>
            <button 
                onClick={handleRemove} 
                style={{
                    padding: '10px 10px',
                    backgroundColor: '#ff4d4d', 
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Remover livro
            </button>

            {}
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow: '10px 10px 10px',
                    zIndex: 1000
                }}>
                    <h2>Adicionar Novo Livro</h2>
                    <input 
                        type="text" 
                        placeholder="Título" 
                        value={newBook.title}
                        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                        style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                    />
                    <input 
                        type="text" 
                        placeholder="Autor" 
                        value={newBook.author}
                        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                        style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                    />
                    <input 
                        type="text" 
                        placeholder="Género" 
                        value={newBook.genre}
                        onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                        style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                    />
                    <input 
                        type="number" 
                        placeholder="Data de Publicação" 
                        value={newBook.published_date}
                        onChange={(e) => setNewBook({ ...newBook, published_date: e.target.value })}
                        style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                        min={0}
                    />
                    <input 
                        type="number" 
                        placeholder="Número de Páginas" 
                        value={newBook.n_pages}
                        onChange={(e) => setNewBook({ ...newBook, n_pages: e.target.value })}
                        style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                        min={0}
                    />
                    <input 
                        type="file"
                        onChange={(e) => setNewBook({ ...newBook, image: e.target.files[0] })}
                        style={{ marginBottom: '10px', width: '100%' }}
                        accept="image/png ,image/jpeg"
                    />
                    <button onClick={handleConfirmAdd} style={{ marginRight: '10px' }}>Adicionar</button>
                    <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                </div>
            )}
            {isModalOpen && <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                zIndex: 999
            }}></div>}

            {}
            {isRemoveModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    boxShadow: '10px 10px 10px',
                    zIndex: 1000
                }}>
                    <h2>Remover Livro</h2>
                    <input 
                        type="text" 
                        placeholder="Introduza o título do livro a remover" 
                        value={bookToRemove}
                        onChange={(e) => setBookToRemove(e.target.value)}
                        style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                    />
                    <button onClick={handleConfirmRemove} style={{ marginRight: '10px' }}>Remover</button>
                    <button onClick={() => setIsRemoveModalOpen(false)}>Cancelar</button>
                </div>
            )}
            {isRemoveModalOpen && <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                zIndex: 999
            }}></div>}
        </div>
    );
};

export default AddRemoveButtons;
