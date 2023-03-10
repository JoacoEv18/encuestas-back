const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const personaSchema = new Schema({
    Nombre: {
        type: 'string',
        required: true
    },
    Apellido: {
        type: 'string',
        required: true
    },
    Preferencia: {
        type: 'string',
        required: true
    },
    timestamp: {
        type: 'Date',
        default: new Date()
    }
});

const Persona = mongoose.model('persona', personaSchema)

module.exports = Persona;