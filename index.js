const express = require('express');
const app = express();
const routes = require('./rutas.js');
const path = require('path');
const port = 4000;

// Servir archivos estáticos 
app.use(express.static(path.join(__dirname, 'static')));

// Usar las rutas definidas en rutas.js
app.use(routes);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
