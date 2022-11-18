require('dotenv/config');
require('./database');
const express = require('express');
const app = express();
const cors = require('cors');

const account = require('./routes/account.route');
const auth = require('./routes/auth.route');
const contact = require('./routes/contact.route');
const transfer = require('./routes/transfer.route');
const apiBaseUrl = '/api/v1';

app.use(cors());
app.use(express.json());
app.use(`${apiBaseUrl}/account`, account);
app.use(`${apiBaseUrl}/auth`, auth);
app.use(`${apiBaseUrl}/contact`, contact);
app.use(`${apiBaseUrl}/transfer`, transfer);

app.listen(5000);

console.log('Servidor corriendo en http://localhost:5000/');