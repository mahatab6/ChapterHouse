import React, { useEffect, useState } from 'react'
import BookCard from '../book/BookCard';


const categorys = ['choose a genre', 'business', 'marketing', 'horror', 'adventure'];

function TopSellers() {

  const [books, setBooks] = useState([]);
  const [selectCategory, setSelectCategory] = useState("choose a genre")

  useEffect(() => {
    fetch("books.json")
    .then(res => res.json())
    .then((data) => setBooks(data))
  }, []);

  const filterBooks = selectCategory === "choose a genre" ? books : books.filter(book => book.category === selectCategory.toLowerCase())

  console.log(filterBooks)

  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-3'>Top Sellers</h2>

      {/* category filtering */}
      <div>
        <select onClick={(e) => setSelectCategory(e.target.value)} className='font-bold rounded-md border px-3 py-1 mb-10 bg-[#EAEAEA]' name="category" id="category">
          {
            categorys.map((category, index) => (
              <option className=' font-bold' key={index} value={category}>{category}</option>
            ))
          }
        </select>
      </div>

      {
        filterBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))
      }
    </div>
  )
}

export default TopSellers