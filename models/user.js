const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

/**
 * Modelo de la base de datos para los usuarios 
 * @param name {String} nombre del usuario
 * @param email {String} correo electronico del usuario
 * @param password {String} password del usuario
 * @param avatar {String} avatar del usuario
 * @param role {String} role del usuario
 * @param permission {Object<bool>} permisos del usuario
 * @param lastName {String} apellido del usuario
 * @param fullName {String} nombre completo del usuario
 */

let User = new Schema({

    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        default: ''
    },

    fullName: {
        type: String,
        default: ''
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    avatar: {
        type: String
    },

    role: {
        type: String,
        default: 'administrative'
    },

    permissions: {},

    phone: {
        type: String,
        default: ''
    }
    
});

User.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
module.exports = mongoose.model("User", User);