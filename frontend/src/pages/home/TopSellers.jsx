import React, { useEffect, useState } from 'react'
import BookCard from '../book/BookCard';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




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

       <Swiper navigation={true} modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        
      {
        filterBooks.map((book, index) => (
          <SwiperSlide key={index}><BookCard  book={book} /></SwiperSlide>
          
        ))
      }

        
      </Swiper>

    </div>
  )
}

export default TopSellers