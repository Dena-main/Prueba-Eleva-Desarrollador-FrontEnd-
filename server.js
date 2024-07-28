const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/welcome', (req, res) => {
    res.json({ message: 'Bienvenido a nuestra API de hamburguesas!' });
});

app.listen(port, () => {
    console.log(`Servidor API de prueba escuchando en http://localhost:${port}`);
});
