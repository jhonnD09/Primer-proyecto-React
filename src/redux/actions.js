export const ADD_CHARACTERS = "ADD_CHARACTERS";

export const DELETE_CHARACTERS = "DELETE_CHARACTERS";

export const addCharacters = (characters) => {
  return { type: ADD_CHARACTERS, payload: characters };
};

export const deleteCharacters = (id) => {
  return { type: ADD_CHARACTERS, payload: id };
};
