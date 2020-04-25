// const moment = require("moment");
const jwt = require("jwt-simple");
const { jwt_secret_key } = require('../settings')

exports.createTokens = (organizacion) => {
    let payload = {
        sub: organizacion._id,
        iat: '',//moment().unix(),
        exp: '',//moment().add(14, 'days').unix(),
        organizacion: organizacion.name,
    };

    return jwt.encode(payload, jwt_secret_key);
};