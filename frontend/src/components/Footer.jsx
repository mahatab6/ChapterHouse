import React from "react";
import footerlogo from "../assets/footer-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";



function Footer() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <footer className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="flex-row md:flex justify-between items-center py-5">
        <div>
          <img className="h-25" src={footerlogo} alt="" />
          <div>
            <ol className="flex gap-5 py-10">
              <li className="text-sm font-semibold">About</li>
              <li className="text-sm font-semibold">Features</li>
              <li className="text-sm font-semibold">Pricing</li>
              <li className="text-sm font-semibold">Gallery</li>
              <li className="text-sm font-semibold">Team</li>
            </ol>
          </div>
        </div>

        <div >
          <p className="text-xl font-bold">
            Subscribe to stay tuned for new product and latest updates. <br /> Let’s do
            it!
          </p>
          <div className=" mt-6">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button type="submit" className="px-4 py-2 font-semibold rounded-lg text-white bg-amber-400 hover:bg-amber-500">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

        <hr />

        <div className="sm:flex-row md:flex justify-between items-center">
            <div>
                <ol className="flex gap-5 py-2">
                    <li className="text-sm font-semibold">Privacy Policy</li>
                    <li className="text-sm font-semibold">Terms of Use</li>
                    <li className="text-sm font-semibold">Sales and Refunds</li>
                    <li className="text-sm font-semibold">Legal</li>
                </ol>
            </div>

            <div className="flex gap-5 py-2">
                <FaFacebook className="size-8"/>
                <FaYoutube className="size-8"/>
                <FaGooglePlay className="size-8"/>
            </div>
        </div>

    </footer>
  );
}

export default Footer;
