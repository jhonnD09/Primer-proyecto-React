import { ADD_CHARACTERS } from "./actions";
import { DELETE_CHARACTERS } from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case DELETE_CHARACTERS:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
