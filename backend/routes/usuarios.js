const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController');
const { check } = require('express-validator');

//api/usuarios
router.post('/', 
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty()
  ],
  usuarioController.crearUsuario
);

module.exports = router;