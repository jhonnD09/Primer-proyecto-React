import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addCharacters, deleteCharacters } from "../../redux/actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import React from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addCharacters,
  deleteCharacters,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteCharacters(id);
    } else {
      setIsFav(true);
      addCharacters({
        id,
        name,
        species,
        gender,
        image,
        onClose,
        addCharacters,
        deleteCharacters,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.contenedor}>
      {isFav ? (
        <button onClick={handleFavorite} className={styles.corazon}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={styles.corazon2}>
          🤍
        </button>
      )}

      <button onClick={() => onClose(id)} className={styles.botons}>
        X
      </button>

      <img src={image} className={styles.image} alt="" />

      <div className={styles.text}>
        <Link to={`/detail/${id}`}>
          <h2 className={styles.name}>Name: {name}</h2>
        </Link>

        <h2>Species: {species}</h2>

        <h2>Gender: {gender}</h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacters: (characters) => {
      dispatch(addCharacters(characters));
    },
    deleteCharacters: (id) => {
      dispatch(deleteCharacters(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
