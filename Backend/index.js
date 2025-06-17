const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const mongoURL = process.env.mongoURL;
const client = new MongoClient(mongoURL);

app.use(cors({
  origin: ['http://localhost:5173','https://jannat-bookstore.netlify.app'], 
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));

app.use(express.json());

let database;


client.connect()
    .then(() => {
        database = client.db('Books');
        console.log("Connected to MongoDB Atlas");
    })
    .catch(error => {
        console.error("Database connection failed", error);
    });

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/uploads-book", async (req, res) => {
    const data = req.body;
    try {
        const collection = database.collection('books');
        const result = await collection.insertOne(data);
        res.send(result);
    } catch (error) {
        res.status(500).send("Error inserting book: " + error);
    }
});

app.get("/all-books", async (req, res) => {
    try {
        const collection = database.collection('books');
        const books = await collection.find().toArray();
        res.send(books);
    } catch (error) {
        res.status(500).send("Error fetching books: " + error);
    }
});

app.patch("/book/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = { ...req.body };
  delete updatedData._id; 

  try {
    const result = await database.collection("books").updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );

    if (result.modifiedCount === 1) {
      res.json({ success: true, message: "Book updated successfully" });
    } else {
      res.status(404).json({ success: false, message: "Book not found or no changes made" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update book", details: error.message });
  }
});



app.delete("/book/:id", async (req, res) => {
    const id = req.params.id;
    const collection = database.collection('books');
    const filter = { _id: new ObjectId(id) };
    const result=await collection.deleteOne(filter);
    res.send(result)
});

app.get("/all-books",async(req,res)=>{
    let query={};
    const collection = database.collection('books');
    if(req.query?.pages){
        query={pages: req.query.pages}
    }
    const result= await collection.find(query).toArray();
    res.send(result)
     
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
