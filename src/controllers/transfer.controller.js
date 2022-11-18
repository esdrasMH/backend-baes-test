const Transfer = require("../models/Transfer.js");
const Account = require("../models/Account");

const create = async (req, res) => {
  try {
    const { accountNumber, amount, destinationBank, email, name, phone, rut } =
      req.body;

    const userId = req.uid;
    const { id, availableBalance } = await Account.findOne({ userId });

    if (availableBalance < amount) throw new Error("Saldo insuficiente");

    const transfer = new Transfer({
      accountNumber,
      amount,
      destinationBank,
      email,
      name,
      phone,
      rut,
      userId,
    });
    const newAvailableBalance = availableBalance - amount;

    await transfer.save();
    await Account.findByIdAndUpdate(id, {
      availableBalance: newAvailableBalance,
    });
    res.json({
      code: 200,
      message: "ok",
      availableBalance: newAvailableBalance,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: error.message });
  }
};

const get = async (req, res) => {
  try {
    const userId = req.uid;
    const transfers = await Transfer.find({ userId });

    res.json({ data: transfers });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: error.message });
  }
};

module.exports = { create, get };
