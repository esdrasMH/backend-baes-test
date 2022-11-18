const Contact = require('../models/Contact');

const create = async (req, res) => {
  try {
    const { accountNumber, destinationBank, email, name, phone, rut } =
      req.body;

    let contact = await Contact.findOne({ accountNumber });
    if (contact)
      throw new Error('El número de cuenta ya existe para un contacto');

    contact = new Contact({
      accountNumber,
      destinationBank,
      email,
      name,
      phone,
      rut,
      userId: req.uid,
    });

    await contact.save();
    res.json({ code: 200, message: 'ok' });

  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: error.message });
  }
};

const get = async (req, res) => {
  try {
    const userId = req.uid;
    const contacts = await Contact.find({ userId });

    res.json({ data: contacts });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: error.message });
  }
};

module.exports = { create, get };
