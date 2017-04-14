var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
    let token = req.header('x-auth');

    User.findByToken(token).then((usr) => {
        if (!usr) {
            return Promise.reject();
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        console.log(e);
        res.status(401).send({
            user: req.body,
            message: e.message,
            status: 401
        });
    });
};


module.exports = {authenticate};