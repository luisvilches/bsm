const User = require('../models/user');

const { createTokens } = require('../utils/createToken');

exports.auth = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });

            } else {

                res.json({
                    success: true,
                    token: createTokens(user),
                    user: user
                });
            }
        }
    });
};
