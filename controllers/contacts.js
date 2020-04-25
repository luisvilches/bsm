const sendMail = require('../utils/sendMail');
const tmpCall = require('../staticTemplatesEmail/call');
const tmpForm = require('../staticTemplatesEmail/contactForm');

exports.call = (req, res) => {
    const { body } = req;
    const { name, email, phone, service } = body;

    sendMail({
        from: email,
        to: ['luis@bukitech.cl','paulina@bukitech.cl','helen@bukitech.cl'],
        subject: "Llamada agendada Bukitech"
    }, tmpCall, {
        name: name,
        email: email,
        phone: phone,
        service: service
    }, true)
        .then(response => res.status(200).json({ success: true, data: response }))
        .catch(err => res.status(200).json({ success: false, data: err }));
}

exports.contactForm = (req, res) => {
    const { body } = req;
    const { name, email, phone, message } = body;

    sendMail({
        from: email,
        to: ['luis@bukitech.cl','paulina@bukitech.cl','helen@bukitech.cl'],
        subject: "Formulario de contacto Bukitech"
    }, tmpForm, {
        name: name,
        email: email,
        phone: phone,
        msg: message
    }, true)
        .then(response => res.status(200).json({ success: true, data: response }))
        .catch(err => res.status(200).json({ success: false, data: err }));
}