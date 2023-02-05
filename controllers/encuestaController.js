const Encuesta = require('../models/encuestaModel');

class encuestaController {
    async findAll(){
        try {
            return await Encuesta.find().lean();
        } catch (error) {
            throw error
        }
    }
    async create(encuesta){
        try {
            return await Encuesta.create(encuesta);
        } catch (error) {
            throw error
        }
    }

    async delete(id){
        try {
            return await Encuesta.findByIdAndDelete(id);
        } catch (error) {
            throw error
        }
    }

    async update(id){
        try {
            return await Encuesta.findByIdAndUpdate(id);
        } catch (error) {
            throw error
        }
    }
}

module.exports = new encuestaController;