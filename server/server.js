const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product.model');
const app = express();
const indexRoutes = require('./routes/index.routes');

//Utilizar las rutas definidas en index.routes.js
app.use('/', indexRoutes);

// Configurar conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/carola-vitale', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {

  // Consulta para obtener todos los productos
  Product.find({})
    .then(productos => {
      console.log(productos)
    })

}).catch(err => {
  console.error('Error al conectar a la base de datos:', err);
});

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(` SERVER.JS Server listening on http://localhost:${PORT}`);
});
