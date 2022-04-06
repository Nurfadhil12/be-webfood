const mongoose = require('mongoose');
const { model, Schema} =mongoose;

const tagsSchema = Schema({
  // Model attributes are defined here
  name: {
    type: String,
    minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
    maxlength: [20, 'Panjang nama kategori maksimal 20 karakter'],
    required: [true, 'Nama kategori harus di isi']
    // allowNull defaults to true
  }
})
module.exports = model('Tags', tagsSchema);