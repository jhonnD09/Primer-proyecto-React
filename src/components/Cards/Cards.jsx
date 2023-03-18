import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.contenedor}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <div>
            <Card
              key={id}
              className={styles.cardtita}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={() => onClose(id)}
            />
          </div>
        );
      })}
    </div>
  );
}
