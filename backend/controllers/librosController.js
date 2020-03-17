const Libro = require('../models/Libro');
const Categoria = require('../models/Categoria');
const { validationResult } = require('express-validator');

exports.crearLibro = async (req, res) => {
  const errores = validationResult(req);

  if( !errores.isEmpty() ) {
    return res.status(400).json({errores:errores.array()})
  }
  
  const {categoria} = req.body;

  try {
    let existeCategoria = await Categoria.findById(categoria);

    if(!existeCategoria) {
      return res.status(404).json({msg: 'La categoria no existe'});
    }

    let libro = new Libro(req.body);
    libro.created_by = req.usuario.id;
    await libro.save();
    res.json(libro);

  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'hubo un error'});
  }

}

exports.obtenerLibrosTodos = async (req, res) => {
  try {
    const libros = await Libro.find().populate('categoria', 'nombre');
    res.json({libros});
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'hubo un error'});
  }
}

exports.obtenerLibrosCategoria = async (req, res) => {
  const {categoria} = req.params;
  try {
    let existeCategoria = await Categoria.findById(categoria);

    if(!existeCategoria) {
      return res.status(404).json({msg: 'La categoria no existe'});
    }

    const libros = await Libro.find({ categoria:categoria, created_by:req.usuario.id }).populate('categoria', 'nombre').sort({created_at: 1});
    res.json({libros});

  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'hubo un error'});
  }
}

exports.actualizarLibro = async (req, res) => {
  const errores = validationResult(req);

  if( !errores.isEmpty() ) {
    return res.status(400).json({errores:errores.array()})
  }
  
  const {titulo, autor, editorial, descripcion} = req.body;
  const nuevoLibro = {};

  if(titulo) nuevoLibro.titulo = titulo;
  if(autor) nuevoLibro.autor = autor;
  if(editorial) nuevoLibro.editorial = editorial;
  if(descripcion) nuevoLibro.descripcion = descripcion;

  try {
    let libro = await Libro.findById(req.params.id);

    if(!libro) {
      return res.status(400).json({msg: 'El libro no existe'});
    }

    libro = await Libro.findByIdAndUpdate({_id: req.params.id}, {$set: nuevoLibro}, {new: true});
    res.json(libro);

  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'Error en el servidor'});
  }
}

exports.eliminarLibro = async (req, res) => {
  try {
    let libro = await Libro.findById(req.params.id);

    if(!libro) {
      return res.status(400).json({msg: 'El libro no existe'});
    }

    libro = await Libro.findOneAndRemove({_id: req.params.id});
    res.json({msg: 'libro Eliminado'});

  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'Error en el servidor'});
  }
}
