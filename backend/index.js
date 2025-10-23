require('dotenv').config()
const express = require("express");
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");

const port = 3000;

// middleware
app.use(express.json());
app.use(cors({
  origin:["http://localhost:5173/"],
  credentials: true,
}))


// routes
const bookRoutes = require("./src/books/books.route")
app.use("/api/books", bookRoutes)


async function main() {
  await mongoose.connect(process.env.DATABASE_URL);

  app.use("/", (req, res) => {
    res.send("Book server runging!");
  });
}

main().then(() => console.log("Mongodb connenct successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

