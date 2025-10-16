import React, { useEffect, useState } from 'react'


const categorys = ['books', 'business', 'marketing', 'horror', 'adventure'];

function TopSellers() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
    .then(res => res.json())
    .then((data) => setBooks(data))
  }, []);

  console.log(books)

  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-3'>Top Sellers</h2>

      {/* category filtering */}
      <div>
        <select className='font-bold rounded-md border px-3 py-1' name="category" id="category">
          {
            categorys.map((category, index) => (
              <option className=' font-bold' key={index} value={category}>{category}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default TopSellers