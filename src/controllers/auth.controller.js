const User = require('../models/User');
const { create } = require('../controllers/account.controller');
const generateToken = require('../utils/generateToken');

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    let newUser = await User.findOne({ email });
    if (newUser) throw { code: 11000 };

    newUser = new User({ email, password });
    await newUser.save();

    create({ userId: newUser.id });

    const { token, expiresIn } = generateToken(newUser.id);

    return res.status(200).json({ token, expiresIn });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      return res.status(400).json({ error: 'Ya existe este usuario' });
    }
    return res.status(403).json({ error: error.message });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const comparePassword = await user.comparePassword(password);

    if (!user || !comparePassword)
      return res.status(403).json({ error: 'Credenciales no válidas' });

    const { token, expiresIn } = generateToken(user.id);

    return res.json({ token, expiresIn });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: error.message });
  }
};

module.exports = { signup, signin };
