import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {alert && <Alert alert={alert} />}

          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert} />}
            />
            <Route
              exact
              path="/signup"
              element={<Signup showAlert={showAlert} />}
            />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
document.getElementById("root");
