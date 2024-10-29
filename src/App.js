import "./App.css";
import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
        <div>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
        </div>
    </>
  );
}

export default App;
