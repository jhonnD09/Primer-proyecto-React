import { ADD_CHARACTERS } from "./actions";
import { DELETE_CHARACTERS } from "./actions";
import { FILTER } from "./actions";
import { ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case DELETE_CHARACTERS:
      // const filtered = state.myFavorites.filter((char) => char.id !== action.payload),
      return {
        ...state,
        myFavorites: action.payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case ORDER:
      if (action.payload === "Ascendente") {
        state.allCharacters = state.allCharacters?.sort((a, b) => a.id - b.id);
      } else if (action.payload === "Descendente") {
        state.allCharacters = state.allCharacters?.sort((a, b) => b.id - a.id);
      }

      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
