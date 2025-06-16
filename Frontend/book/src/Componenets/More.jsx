import React from "react";

const authorsData = [
  {
    id: 1,
    name: "J.K. Rowling",
    bio: "British author best known for the Harry Potter series, which has sold over 500 million copies worldwide.",
    books: [
      {
        id: "hp1",
        title: "Harry Potter and the Sorcerer's Stone",
        published: 1997,
        buyLink: "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X"
      },
      {
        id: "hp2",
        title: "Harry Potter and the Chamber of Secrets",
        published: 1998,
        buyLink: "https://www.amazon.com/Harry-Potter-Chamber-Secrets-Rowling/dp/0439064872"
      },
      {
        id: "hp3",
        title: "Harry Potter and the Prisoner of Azkaban",
        published: 1999,
        buyLink: "https://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Rowling/dp/0439136369"
      },
    ],
    reviews: [
      "Rowling’s imagination is unmatched, creating a magical world beloved by readers of all ages.",
      "Her storytelling blends adventure, friendship, and courage with deep themes.",
      "A literary phenomenon that redefined children's fantasy for a generation."
    ],
  },
  {
    id: 2,
    name: "George Orwell",
    bio: "English novelist and essayist, famous for his works criticizing totalitarianism and advocating for social justice.",
    books: [
      { id: "1984", title: "1984", published: 1949, buyLink: "https://www.amazon.com/1984-George-Orwell/dp/0451524934" },
      { id: "afarm", title: "Animal Farm", published: 1945, buyLink: "https://www.amazon.com/Animal-Farm-George-Orwell/dp/0451526341" },
    ],
    reviews: [
      "'1984' remains a chilling portrayal of surveillance and control in modern society.",
      "Orwell’s insights on power and oppression are timeless and thought-provoking.",
      "His allegories serve as potent warnings against authoritarianism."
    ],
  },
  {
    id: 3,
    name: "Agatha Christie",
    bio: "English crime novelist, short story writer, and playwright. She is known for her 66 detective novels and 14 short story collections.",
    books: [
      { id: "mrurder", title: "And Then There Were None", published: 1939, buyLink: "https://www.amazon.com/Then-There-Were-None-Christie/dp/0062073486" },
      { id: "rodger", title: "The Murder of Roger Ackroyd", published: 1926, buyLink: "https://www.amazon.com/Murder-Roger-Ackroyd-Agatha-Christie/dp/0062073575" },
    ],
    reviews: [
      "The Queen of Crime, her plots are intricate and full of clever twists.",
      "Her characters, especially Hercule Poirot and Miss Marple, are iconic.",
      "A master of suspense, keeping readers guessing until the very end."
    ],
  },
  {
    id: 4,
    name: "Ernest Hemingway",
    bio: "American novelist and short-story writer. His sparse writing style had a significant influence on 20th-century fiction.",
    books: [
      { id: "sunrises", title: "The Sun Also Rises", published: 1926, buyLink: "https://www.amazon.com/Sun-Also-Rises-Ernest-Hemingway/dp/0743297330" },
      { id: "farewell", title: "A Farewell to Arms", published: 1929, buyLink: "https://www.amazon.com/Farewell-Arms-Ernest-Hemingway/dp/1439172658" },
      { id: "oldman", title: "The Old Man and the Sea", published: 1952, buyLink: "https://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/0684801221" },
    ],
    reviews: [
      "Hemingway's prose is sharp, concise, and incredibly impactful.",
      "He captures the human condition with raw honesty and profound simplicity.",
      "His stories are powerful studies of courage, loss, and resilience."
    ],
  },
  {
    id: 5,
    name: "Jane Austen",
    bio: "English novelist known primarily for her six major novels, which interpret, critique, and comment upon the British landed gentry at the end of the 18th century.",
    books: [
      { id: "pnp", title: "Pride and Prejudice", published: 1813, buyLink: "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/0141439513" },
      { id: "sands", title: "Sense and Sensibility", published: 1811, buyLink: "https://www.amazon.com/Sense-Sensibility-Jane-Austen/dp/0141439599" },
    ],
    reviews: [
      "Austen's wit and social commentary are as relevant today as ever.",
      "Her heroines are strong, intelligent, and often ahead of their time.",
      "A timeless author whose exploration of love and societal norms captivates."
    ],
  },
  {
    id: 6,
    name: "Stephen King",
    bio: "American author of horror, supernatural fiction, suspense, crime, science fiction, and fantasy novels. Dubbed the 'King of Horror'.",
    books: [
      { id: "it", title: "It", published: 1986, buyLink: "https://www.amazon.com/It-Stephen-King/dp/1501175467" },
      { id: "shinning", title: "The Shining", published: 1977, buyLink: "https://www.amazon.com/Shining-Stephen-King/dp/0385121679" },
      { id: "pet", title: "Pet Sematary", published: 1983, buyLink: "https://www.amazon.com/Pet-Sematary-Stephen-King/dp/150115670X" },
    ],
    reviews: [
      "King masterfully taps into primal fears, creating truly terrifying narratives.",
      "His character development is exceptional, making even the most horrific stories deeply human.",
      "A prolific writer whose influence on modern horror is unparalleled."
    ],
  },
  {
    id: 7,
    name: "Toni Morrison",
    bio: "American novelist, essayist, book editor, and college professor. Her novels are known for their epic themes, vivid dialogue, and richly detailed African-American characters.",
    books: [
      { id: "beloved", title: "Beloved", published: 1987, buyLink: "https://www.amazon.com/Beloved-Toni-Morrison/dp/1400033411" },
      { id: "bluest", title: "The Bluest Eye", published: 1970, buyLink: "https://www.amazon.com/Bluest-Eye-Toni-Morrison/dp/0307278440" },
    ],
    reviews: [
      "Morrison's prose is poetic and profound, exploring complex historical and social issues.",
      "Her stories give voice to marginalized experiences with unparalleled depth and beauty.",
      "A literary giant whose work is essential for understanding American history and identity."
    ],
  },
  {
    id: 8,
    name: "Gabriel García Márquez",
    bio: "Colombian novelist, short-story writer, screenwriter, and journalist, known for his magical realism style.",
    books: [
      { id: "solitude", title: "One Hundred Years of Solitude", published: 1967, buyLink: "https://www.amazon.com/Hundred-Solitude-Gabriel-Garcia-Marquez/dp/0060883286" },
      { id: "cholera", title: "Love in the Time of Cholera", published: 1985, buyLink: "https://www.amazon.com/Love-Time-Cholera-Gabriel-Garcia/dp/0307389733" },
    ],
    reviews: [
      "Márquez weaves fantastical elements seamlessly into reality, creating truly unique worlds.",
      "His storytelling is rich, vibrant, and deeply human.",
      "A Nobel laureate whose work transports readers to extraordinary realms."
    ],
  },
  {
    id: 9,
    name: "Mary Shelley",
    bio: "English novelist who wrote the Gothic novel Frankenstein; or, The Modern Prometheus, considered an early example of science fiction.",
    books: [
      { id: "frankenstein", title: "Frankenstein", published: 1818, buyLink: "https://www.amazon.com/Frankenstein-Penguin-Classics-Mary-Shelley/dp/0141439475" },
    ],
    reviews: [
      "Shelley's Frankenstein is a foundational text in science fiction and horror, exploring ethical dilemmas.",
      "Her work questions creation, responsibility, and what it means to be human.",
      "A visionary writer whose masterpiece resonates centuries later."
    ],
  },
  {
    id: 10,
    name: "F. Scott Fitzgerald",
    bio: "American novelist and short story writer, whose works are exemplary of the Jazz Age.",
    books: [
      { id: "gatsby", title: "The Great Gatsby", published: 1925, buyLink: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567" },
      { id: "night", title: "Tender Is the Night", published: 1934, buyLink: "https://www.amazon.com/Tender-Night-Scott-Fitzgerald/dp/068480154X" },
    ],
    reviews: [
      "Fitzgerald captures the glamour and disillusionment of the Jazz Age with elegant prose.",
      "The Great Gatsby is a quintessential American novel, rich with symbolism and social critique.",
      "His writing is both beautiful and melancholic, leaving a lasting impression."
    ],
  },
];

const More = () => {
  return (
    <div className="min-h-screen bg-white text-white p-8 font-inter"> 
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#61dafb] text-center tracking-tight">
        Renowned Authors & Their Works
      </h1>

      <div className="space-y-12 max-w-6xl mx-auto"> 
        {authorsData.map((author) => (
          <div key={author.id} className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-8 shadow-2xl flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 transition-transform transform hover:scale-[1.02] duration-300 ease-in-out">
            {/* Author Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2 text-gray-100">{author.name}</h2>
              <p className="mb-6 text-gray-400 italic text-lg leading-relaxed">{author.bio}</p>

              {/* Books Section */}
              <h3 className="text-2xl font-semibold mb-4 text-[#61dafb] border-b-2 border-gray-700 pb-2">Famous Books:</h3>
              <ul className="space-y-4">
                {author.books.map((book) => (
                  <li key={book.id} className="text-gray-200">
                    <strong className="text-lg">{book.title}</strong>
                    <span className="text-gray-500 ml-2">({book.published})</span>
                    <div className="flex flex-wrap mt-2 space-x-3">
                      
                      <a
                        href={book.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-colors duration-200"
                        title="Buy this book"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.769.743 1.769H19"></path></svg>
                        Buy Book
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3"> 
              <h3 className="text-2xl font-semibold mb-4 text-[#61dafb] border-b-2 border-gray-700 pb-2">Reviews & Quotes:</h3>
              <ul className="space-y-3 text-gray-400 text-base">
                {author.reviews.map((review, index) => (
                  <li key={index} className="leading-relaxed">
                    <span className="text-gray-500 mr-2">&#8220;</span>{review}<span className="text-gray-500 ml-2">&#8221;</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;