import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CardLists from "./components/CardLists";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<NavBar />}>
        {/* <Route index element={<CardLists />} /> */}
      </Route>
    </Routes>
    // <>
    //   <NavBar />
    //   <CardLists/>
    // </>
  );
}

export default App;
