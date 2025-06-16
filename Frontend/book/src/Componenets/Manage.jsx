import React, { useState, useEffect,navigate } from 'react';
import Table from 'react-bootstrap/Table'; // Still using Bootstrap Table for its structure, but styling with Tailwind
import { useNavigate } from 'react-router-dom';

const Manage = () => {
  const navigate=useNavigate()
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Deleted Successfully");
        setBooks(books.filter(book => book._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

  return (
    <div className="container mx-auto p-4"> {/* Centering container with padding */}
      <h2 className="text-3xl font-bold text-center mb-6">Manage Books</h2> {/* Heading styling */}
      <Table striped bordered hover className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        {/* Tailwind classes added to the Table component for overall styling */}
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-4 uppercase font-semibold text-sm text-left">#</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Title</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Author</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Published Date</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Description</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Price</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Actions</th> {/* Changed text from Edit/Delete */}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {books.length > 0 ? (
            books.map((book, index) => (
              <tr key={book._id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-medium">{book.title}</td>
                <td className="py-3 px-4">{book.author}</td>
                <td className="py-3 px-4">{book.publishedDate}</td>
                <td className="py-3 px-4 max-w-xs truncate">{book.description}</td> {/* Truncate long descriptions */}
                <td className="py-3 px-4">${book.price}</td>
                <td className="py-3 px-4 space-x-2"> {/* Added space between buttons */}
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" onClick={() => navigate(`/dashboard/edit/${book._id}`)}

                    // You'll likely want to link this to an edit page/modal
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-500">No books available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Manage;