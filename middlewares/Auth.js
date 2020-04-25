const jwt = require('jwt-simple');
const moment = require('moment');
const { jwt_secret_key } = require('../settings');

exports.auth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(403).send({ message: 'Error de auntenticación' });

    let token = authorization.split(" ")[1];
    let payload = jwt.decode(token, jwt_secret_key);

    //if (payload.exp <= moment().unix()) return res.status(401).send({message: 'Session expirada'});

    req.user = payload.sub;
    req.username = payload.username;
    req.company = payload.companyId;
    next();
}