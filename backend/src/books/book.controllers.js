const Book = require("./book.model");

const postAbook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "successfully data added on database", book: newBook });
  } catch (error) {
    console.error("Error creating book", error);
    res.status(500).send({ message: "Filed to creating book" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    console.error("All books fetch ", error);
    res.status(500).send({ message: "All book fetch error" });
  }
};

module.exports = {
  postAbook,
  getAllBooks
};
