const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('Conexion exitosa');
  })
  .catch((error) => {
    console.log('Error al crear conexion', error);
  });
