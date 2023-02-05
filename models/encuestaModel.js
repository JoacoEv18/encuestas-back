const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const encuestaSchema = new Schema({
    Nombre: {
        type: 'string',
        required: true
    },
    Asistencia: {
        type: 'string',
        required: true
    },
    Menu: {
        type: 'string',
        required: true
    },
    timestamp: {
        type: 'Date',
        default: new Date()
    }
});

const Encuesta = mongoose.model('encuesta', encuestaSchema)

module.exports = Encuesta;