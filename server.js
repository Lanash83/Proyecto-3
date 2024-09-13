require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");

const serveIndex = require('serve-index');
const app = express();
app.use(cors());
let contacts = []; 



app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    const { name, email, text } = req.body;
    contacts.push({ name, email, text }); 
    console.log(req.body)
    res.status(201).json({ message: 'Contacto recibido' });
});

app.get('/api/contacts', (req, res) => {
    res.json(contacts); 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
  });

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'contacto.html'));
})
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'views', 'sobre.html'));
})

app.use('/script', 
    serveIndex(path.join(__dirname, 'public', 'script')));


const PORT = process.env.PORT_SERVER_API|| 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
