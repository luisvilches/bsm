const Model = require('../models/user');
const generateAvatar = require('../utils/generateAvatar');
const pass = require('../utils/generatePass');
// const email = require('../utils/sendMail');
const app = require('../index');



/**
 * Controlador que crea a un nuevo usuario
 */

exports.createUser = (req, res) => {
    const { body } = req;
    const { name, email, lastName, phone } = body;

    const password = pass();

    let user = new Model(
        {
            name: name,
            email: email,
            lastName: lastName,
            fullName: name + ' ' + lastName,
            password: password,
            phone: phone,
            avatar: generateAvatar(name, lastName),
            permissions: {}
        }
    );

    user.save((err, user))
        .then(response => {
            app.io.sockets.emit('update_users');
            res.status(200).json({ success: true, data: response });
            // email.newPassword({
            //     img:'https://res.cloudinary.com/dheck1ubc/image/upload/v1544156968/Email/Images/AnnouncementOffset/header-top.png',
            //     empresa:'Clinica Torre Alameda',
            //     name:req.body.name + ' ' + req.body.lastName,
            //     mail:req.body.email,
            //     password: password
            // }).then( respuesta => {
            //     if(respuesta){
            //         // res.status( 200 ).json( { success: true, data: user } );
            //         console.log('send mail');
            //     }
            // })
        })
        .catch(err => res.status(500).json({ success: false }));
};

/**
 * Controlador que devuelve un usuario segun su id
 */

exports.user = (req, res) => {

    Model.findById({ _id: req.params.id })
        .then(response => {
            app.io.sockets.emit('charge');
            res.status(200).json({ success: true, data: response });
        })
        .catch(err => res.status(500).json({ success: false, err: err }))
};

/**
 * Controlador que devuelve todos los usuarios
 */

exports.userAll = (req, res) => {
    Model.find({})
        .then(response => res.status(200).json({ success: true, data: response }))
        .catch(err => res.status(500).json({ success: false, err: err }))
};



/**
 * Controlador que actualiza el password de un usuario
 */

exports.setPassword = (req, res) => {
    const { body } = req;
    const { password } = body

    Model.findOneAndUpdate({ _id: req.params.id })
        .then(response => {
            response['password'] = password;
            response.save()
                .then(doc => res.status(200).json({ success: true, data: response }))
                .catch(err => res.status(500).json({ success: false, err: err }))
        })
        .catch(err => res.status(500).json({ success: false, err: err }))
};


/**
 * Controlador que elimina de la base de datos a un profesional segun su ID
 */

exports.remove = (req, res) => {

    Model.remove({ _id: req.params.id })
        .then(response => {
            app.io.sockets.emit('update_users');
            res.status(200).json({ success: true, data: response });
        })
        .catch(err => res.status(500).json({ success: false, error: err }))
}