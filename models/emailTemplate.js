const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

/**
 * Modelo de la base de datos para los usuarios 
 * @param name {String} nombre del template
 * @param content {String} contenido del template
 * @param description {String} descripción del template
 */

let EmailTemplate = new Schema({

    name: {
        type: String,
        required: true
    },

    content: {
        type: String,
        default: ''
    },

    description: {
        type: String,
        default: ''
    },

});

EmailTemplate.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
module.exports = mongoose.model("EmailTemplate", EmailTemplate);