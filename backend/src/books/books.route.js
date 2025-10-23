const express = require("express");
const { postAbook, getAllBooks } = require("./book.controllers");


const router = express.Router();

router.post("/create-book",postAbook );

router.get("/", getAllBooks)

module.exports = router; 
