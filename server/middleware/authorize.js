const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('token');
    if (!token)
        return res.status(403).send({ message: 'It\'s forbidden for you' });

    try {
        const verify = jwt.verify(token, process.env.JWTPRIVATEKEY);
        req.user = verify;
        next();
    } catch (error) {
        res.status(403).send({ message: 'It\'s forbidden for you' });
    }
};
