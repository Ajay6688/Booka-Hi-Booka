import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import BookDescription from "./components/BookDescription";

function App() {
  return (
    <Routes>
      <Route exact path="/Booka-Hi-Booka/login" element={<Login />} />
      <Route exact path="/Booka-Hi-Booka/signup" element={<Register />} />
      <Route exact path="/Booka-Hi-Booka" element={<NavBar />}/>
      <Route exact path="/Booka-Hi-Booka/books-description" element={<BookDescription />} />
    </Routes>
    // <>
    //   <NavBar />
    //   <CardLists/>
    // </>
  );
}

export default App;
