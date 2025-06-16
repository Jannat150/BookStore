import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    publishedDate: '',
    pages: '',
    description: '',
    image: '',
    price: ''
  });

  useEffect(() => {
    fetch(`http://localhost:8000/all-books`)
      .then(res => res.json())
      .then(data => {
        const foundBook = data.find(b => b._id === id);
        if (foundBook) setBook(foundBook);
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setBook(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`http://localhost:8000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        alert("Book updated successfully!");
        navigate("/dashboard/manage");
      })
      .catch(err => alert("Update failed: " + err));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit}>
       <input name="title" placeholder='Enter book Title' value={book.title} onChange={handleChange}></input>
        <input name='author' placeholder='Enter Author name' value={book.author} onChange={handleChange}></input>
        <input name='publishedDate' placeholder='Enter published date' value={book.publishedDate} onChange={handleChange}></input>
        <input name='pages' placeholder='Enter number of pages' value={book.pages} onChange={handleChange}></input>
        <input name='description' placeholder='Enter Book Description' value={book.description} onChange={handleChange}></input>
        <input name='image' placeholder='Enter image Url' value={book.image} onChange={handleChange}></input>
        <input name='price' placeholder='Enter price'value={book.price} onChange={handleChange}></input>
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBooks;
