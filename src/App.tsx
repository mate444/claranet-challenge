import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
