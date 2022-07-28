import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [enableSidebar, setEnableSidebar] = useState(false);
  return (
    <>
      <Navbar setEnableSidebar={setEnableSidebar} />
      <Routes>
        <Route path="/" element={<Home enableSidebar={enableSidebar} />} />
      </Routes>
    </>
  );
}

export default App;
