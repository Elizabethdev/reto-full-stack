const express = require('express');
const router = express.Router();
const libroController = require('../controllers/librosController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

//api/libros
router.post('/',
	auth,
	[
		check('titulo', 'El titulo es requerido').not().isEmpty(),
		check('autor', 'El autor es requerido').not().isEmpty(),
		check('editorial', 'La editorial es requerido').not().isEmpty(),
		check('descripcion', 'La descripcion es requerido').not().isEmpty()
	],
	libroController.crearLibro
);

router.get('/',
	auth,
	libroController.obtenerLibrosTodos
)

router.get('/categoria/:categoria',
	auth,
	libroController.obtenerLibrosCategoria
)

router.put('/:id',
	auth,
	[
		check('titulo', 'El titulo es requerido').not().isEmpty(),
		check('autor', 'El autor es requerido').not().isEmpty(),
		check('editorial', 'La editorial es requerida').not().isEmpty(),
		check('descripcion', 'La descripción es requerida').not().isEmpty()
	],
	libroController.actualizarLibro
)

router.delete('/:id',
	auth,
	libroController.eliminarLibro
)

module.exports = router;