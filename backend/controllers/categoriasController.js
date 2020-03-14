const Categoria = require('../models/Categoria');
const { validationResult } = require('express-validator');

exports.crearCategoria = async (req, res) => {
  const errores = validationResult(req);

  if( !errores.isEmpty() ) {
    return res.status(400).json({errores:errores.array()})
  }
  
  const {nombre} = req.body;

  try {
    let categoria = await Categoria.findOne({nombre});

    if(categoria) {
      return res.status(400).json({msg: 'La categoria ya existe'});
    }

    categoria = new Categoria(req.body);
    await categoria.save();
    res.json(categoria);

  } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error');
  }

}

exports.obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json({categorias});
  } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error');
  }
}

exports.actualizarCategoria = async (req, res) => {
  const errores = validationResult(req);

  if( !errores.isEmpty() ) {
    return res.status(400).json({errores:errores.array()})
  }
  
  const {nombre} = req.body;
  const nuevoProyecto = {};

  if(nombre) {
    nuevoProyecto.nombre = nombre;
  }

  try {
    let categoria = await Categoria.findById(req.params.id);

    if(!categoria) {
      return res.status(400).json({msg: 'La Categoria no existe'});
    }

    categoria = await Categoria.findByIdAndUpdate({_id: req.params.id}, {$set: nuevoProyecto}, {new: true});
    res.json(categoria);

  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
}

exports.eliminarCategoria = async (req, res) => {
  try {
    let categoria = await Categoria.findById(req.params.id);

    if(!categoria) {
      return res.status(400).json({msg: 'La Categoria no existe'});
    }

    categoria = await Categoria.findOneAndRemove({_id: req.params.id});
    res.json({msg: 'Categoria Eliminada'});

  } catch (error) {
    console.log(error);
    res.status(500).send('Error en el servidor');
  }
}
