const jwt = require('jsonwebtoken');

const generateToken = (uid) => {
  const expiresIn = 1000 * 60 * 60;

  try {
    const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn });
    return { token, expiresIn };
  } catch (error) {
    console.log(error);
  }
};

module.exports = generateToken;
