import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <Navbar />
    
      <main className="min-h-screen max-w-screen-xl mx-auto ">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;
