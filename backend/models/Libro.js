const mongoose = require('mongoose');

const LibroSchema = mongoose.Schema({
  titulo:{
    type: String,
    require: true,
    trim: true
  },
  autor:{
    type: String,
    require: true,
    trim: true
  },
  editorial:{
    type: String,
    require: true,
    trim: true
  },
  categoria:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    require: true,
  },
  descripcion:{
    type: String,
    require: true,
    trim: true
  },
  stock:{
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now()
  }

});

module.exports = mongoose.model('Libro', LibroSchema);