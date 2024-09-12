const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let contacts = []; // Base de datos simple en memoria

app.use(bodyParser.json());
app.use(express.static('../frontend')); // Servir archivos estáticos desde la carpeta frontend

app.post('/api/contact', (req, res) => {
    const { name, email } = req.body;
    contacts.push({ name, email }); // Agregar contacto a la "base de datos"
    res.status(201).json({ message: 'Contacto recibido' });
});

app.get('/api/contacts', (req, res) => {
    res.json(contacts); // Devolver contactos
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
