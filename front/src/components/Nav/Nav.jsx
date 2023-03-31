import SearchBar from "../SearchBar/SearchBar";
import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={style.nav}>
      <Link to="/about">
        <button>About</button>
      </Link>

      <SearchBar onSearch={props.onSearch} />

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
    </div>
  );
}
