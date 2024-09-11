"use client"
// Contoh komponen di pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then((response) => response.json())
      .then((data) => {
        setBooks(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setBooks([]);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Buku</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map((book) => (
          <div key={book.id} style={{ margin: '20px', border: '1px solid #ddd', padding: '10px', width: '200px', textAlign: 'center' }}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              {book.cover_image && (
                <img 
                  src={book.cover_image} 
                  alt={`Cover of ${book.title}`} 
                  style={{ width: '150px', height: '200px', objectFit: 'cover', marginBottom: '10px' }}
                />
              )}
            </a>
            <a href={book.link} target="_blank" rel="noopener noreferrer">Baca Buku</a>
          </div>
        ))}
      </div>
    </div>
  );
}
