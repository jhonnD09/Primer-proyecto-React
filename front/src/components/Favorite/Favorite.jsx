import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import style from "./Favorite.module.css";
import { filterCards, orderCards } from "../../redux/actions";

const Favorite = () => {
  const Favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleChange1 = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleChange2 = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.content}>
      {Favorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
      <div className={style.order}>
        <select name="ordenamiento" id="" onChange={handleChange1}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filtro" id="" onChange={handleChange2}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
    </div>
  );
};

export default Favorite;
