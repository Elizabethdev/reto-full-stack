const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
	//leer token del header
	const token = req.header('x-auth-token');

	//validar token
	if(!token) {
		return res.status(401).json({msg: 'Permiso denegado, no hay token'});
	}

	try {
		const cifrado = jwt.verify(token, process.env.FIRMA);
		req.usuario = cifrado.usuario;
		next();
	} catch (error) {
		res.status(401).json({msg: 'Token no válido'});
	}
}