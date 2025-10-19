import React from "react";
import { Link } from "react-router";
import { FaRegHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {

  const currentUser = false; 

  const item = useSelector((state) => state.card.cardItems)
  console.log(item)

  return (
    <header className="max-w-screen-xl mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        {/* left side */}
        <div className="flex items-center gap-3">
          <Link to={"/"}>Chapter</Link>
          <div className=" relative sm:w-72 w-40 space-x-2">
            <FaSearch className=" absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="search here"
              className="bg-[#EAEAEA] focus:outline-none w-full py-1 px-6 md:px-8 rounded-md"
            />
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center gap-3">
          {
            currentUser ?  <FaUser className="size-6" /> : <Link to={'/login'}> <FaUser className="size-6" /></Link>
          }
         
          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>
          <Link to={'/card'} className=" bg-amber-300 flex items-center py-1 px-6 md:px-8 rounded-md">
            <FaShoppingCart className="size-6"/>
            <span>0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
