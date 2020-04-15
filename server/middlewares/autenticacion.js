const jwt = require('jsonwebtoken');

//=========
// Verificar token
//=========

const verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no válido"
                }
            });
        }

        req.usuario = decoded.usuario;

        next();
    });
};

//=========
// Verificar Admin_Role
//=========

const verificaAdmin_Role = (req, res, next) => {
    let role = req.usuario.role;

    if (role == "USER_ROLE") {
        return res.json({
            ok: false,
            err: {
                message: "El usuario no es administrador"
            }
        });
    }

    next();

};

//=========
// Verificar token img
//=========

const verficaTokenImg = (req, res, next) => {
    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no válido"
                }
            });
        }

        req.usuario = decoded.usuario;

        next();
    });

}

module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verficaTokenImg
}