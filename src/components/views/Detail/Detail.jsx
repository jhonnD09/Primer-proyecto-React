import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
  const params = useParams();

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "0191c8499672.815486f73964f87ccf59";

    axios(`${URL_BASE}/character/${params.detailId}?key=${KEY}`).then(
      (response) => setCharacter(response.data)
    );
  }, []);

  return (
    <div className={styles.detalles}>
      {character.name ? (
        <div className={styles.detail}>
          <h1>NOMBRE: {character.name}</h1>
          <h2>STATUS: {character.status}</h2>
          <h2>SPECIE: {character.species}</h2>
          <h2>GENDER: {character.gender}</h2>
          <h2>ORIGIN: {character.origin?.name}</h2>
          <img src={character.image} alt="" className={styles.image} />
        </div>
      ) : (
        <h2>Loading ...</h2>
      )}
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Detail;
