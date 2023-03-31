import axios from "axios";
export const ADD_CHARACTERS = "ADD_CHARACTERS";

export const DELETE_CHARACTERS = "DELETE_CHARACTERS";

export const FILTER = "FILTER";

export const ORDER = "ORDER";

export const addCharacters = (characters) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/rickandmorty/fav", characters)
      .then((response) => {
        return dispatch({ type: ADD_CHARACTERS, payload: response.data });
      });
  };

  //return { type: ADD_CHARACTERS, payload: characters };
};

export const deleteCharacters = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
      .then((response) => {
        return dispatch({ type: DELETE_CHARACTERS, payload: response.data });
      });
  };

  //return { type: DELETE_CHARACTERS, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
