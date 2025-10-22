require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 3000;

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);

  app.get("/", (req, res) => {
    res.send("Book server runging!");
  });
}

main().then(() => console.log("Mongodb connenct successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

