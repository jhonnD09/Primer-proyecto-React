import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./components/views/About/About";
import Detail from "./components/views/Detail/Detail";
import Form from "./components/Form/Form.jsx";
import Favorite from "./components/Favorite/Favorite.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "0191c8499672.815486f73964f87ccf59";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "jhonndiaz58@gmail.com";
  const password = "jhonn10";

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/favorites" element={<Favorite />} />

        <Route exact path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
