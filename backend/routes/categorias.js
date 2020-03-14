const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriasController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

//api/categorias
router.post('/',
	auth,
	[
		check('nombre', 'Escribe una categoria').not().isEmpty()
	],
	categoriaController.crearCategoria
);

router.get('/',
	auth,
	categoriaController.obtenerCategorias
)

router.put('/:id',
	auth,
	[
		check('nombre', 'Escribe una categoria').not().isEmpty()
	],
	categoriaController.actualizarCategoria
)

router.delete('/:id',
	auth,
	categoriaController.eliminarCategoria
)

module.exports = router;