import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    
      <Navbar />
    
      <main className="min-h-screen max-w-screen-xl mx-auto ">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
