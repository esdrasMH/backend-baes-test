const Account = require("../models/Account");

const create = async (req, res) => {
  try {
    const { userId } = req;
    const newAccount = new Account({ userId });

    await newAccount.save();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: error.message });
  }
};

const get = async (req, res) => {
  try {
    const userId = req.uid;
    const account = await Account.findOne({ userId });

    res.json({ data: account });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: error.message });
  }
};

module.exports = { create, get };
