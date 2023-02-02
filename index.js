const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 9000;
require('./database/conexion');
const path = require('path');

const app = express();
const personaController = require('./controllers/personaController');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());
app.use(morgan('common'));

app.get('/', async (req, res) => {
    res.json({
        personas: await personaController.findAll()
    });
});

app.post('/crear', async (req, res) => {
    const {nombre, apellido, preferencia} = req.body;
    console.log(`${nombre} ${apellido}, ${preferencia}`);
    await personaController.create(req.body)
    res.send('Persona Agregada')
});

app.listen(PORT, () => {
    console.log(`MERN trabajando en el Puerto ${PORT}`);
});