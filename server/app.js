require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);
console.log('rutas configuradas correctamente / CHECK')

require("./error-handling")(app);

module.exports = app;
