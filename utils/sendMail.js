const NodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const smtp = require('./smtp')
const compileEmail = require('./compileTemplate');

function sendMail(opt, template, params,manual = false) {

    return new Promise((resolve, reject) => {

        compileEmail(template, params,manual)
            .then(response => {

                let transporter = NodeMailer.createTransport(smtpTransport(smtp));
                let mailOptions = {
                    from: `${opt.from} <${opt.from}>`,
                    to: opt.to,
                    subject: opt.subject,
                    html: response
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log('@error',error)
                        reject(error)
                    } else {
                        resolve(info);

                    }
                })
            })
            .catch(err => {
                console.log('err',err);
                reject(err);
            });
    })
}


module.exports = sendMail;