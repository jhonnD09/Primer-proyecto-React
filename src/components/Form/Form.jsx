import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });

    setErrors(validation({ ...userData, [property]: value }, errors));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={submitHandler} className={style.container}>
      <p className={style.iniciar}>Iniciar Sesion</p>
      <div>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <span>{errors.username}</span>
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <span>{errors.password}</span>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
export default Form;
