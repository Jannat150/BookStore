import React, { useEffect, useState } from 'react';

const FavBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://bookstore-p7o2.onrender.com/all-books')
      .then(res => res.json())
      .then(data => {
        // Sort books by title alphabetically for consistent display
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
        setAllBooks(sortedData);
      })
      .catch(err => console.error("Error fetching all books:", err));

    const favIds = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
    setFavorites(favIds);
  }, []);

  const toggleFavorite = (id) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter(favId => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
  };

  const favoriteBooksData = allBooks.filter(book => favorites.includes(book._id));

  return (
    <div className="flex flex-col  min-h-screen p-4">
      <h1 className='text-4xl'>All Books</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl mb-8"> {/* Adjusted max-w for table */}
        

     
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 uppercase font-semibold text-sm text-left">#</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Title</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Author</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Published</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm text-left">Price</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm text-center">Favorite</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 ">
              {allBooks.length > 0 ? (
                allBooks.map((book, index) => (
                  <tr key={book._id} >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 font-medium">{book.title}</td>
                    <td className="py-3 px-4">{book.author}</td>
                    <td className="py-3 px-4">{book.publishedDate}</td>
                    <td className="py-3 px-4">${parseFloat(book.price).toFixed(2)}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => toggleFavorite(book._id)}
                        className={`py-1 px-3 rounded-full text-sm font-semibold transition-colors duration-200 ease-in-out
                          ${favorites.includes(book._id)
                            ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                          }`}
                      >
                        {favorites.includes(book._id) ? '★ Favorited' : '☆ Mark Favorite'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">No books available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Your Favorites Section */}
      <h1 className='text-4xl'>Favourite Books</h1>
      {favoriteBooksData.length > 0 && (
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Responsive grid */}
            {favoriteBooksData.map(book => (
              <div key={book._id} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-32 h-40 object-cover rounded-md mb-4 shadow-sm" // Fixed size image with shadow
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-1">by {book.author}</p>
                <p className="text-gray-500 text-xs mb-2">Published: {book.publishedDate}</p>
                <p className="text-green-600 font-bold text-md mb-4">${parseFloat(book.price).toFixed(2)}</p>
                <button
                  onClick={() => toggleFavorite(book._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full transition duration-150 ease-in-out transform hover:scale-105"
                >
                  Remove Favorite
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {favoriteBooksData.length === 0 && (
         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Favorite Books</h2>
           <p className="text-center text-gray-600">You haven't marked any books as favorites yet.</p>
         </div>
       )}
    </div>
  );
};

export default FavBooks;