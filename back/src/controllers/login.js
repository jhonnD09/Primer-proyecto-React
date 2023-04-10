const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) return res.status(400).send("Faltan datos");

  try {
    const usuarioNew = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!usuarioNew) res.status(404).send("Usuario no encontrado");

    if (usuarioNew.password !== password)
      res.status(400).send("Contraseña incorrecta");

    if (usuarioNew) res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
