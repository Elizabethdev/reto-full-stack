const mongoose = require('mongoose');

const CategoriaSchema = mongoose.Schema({
  nombre:{
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  }

});

module.exports = mongoose.model('Categoria', CategoriaSchema);