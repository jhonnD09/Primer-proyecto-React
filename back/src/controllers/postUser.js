const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password, id } = req.body;
  if (!email || !password) return res.status(400).send("Faltan datos");

  try {
    const [user, created] = await User.findOrCreate({
      where: { id },
      defaults: { password, email },
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
