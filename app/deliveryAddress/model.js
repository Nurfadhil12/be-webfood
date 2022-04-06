const mongoose = require('mongoose');
const { model, Schema} =mongoose;

const deliveryAddressSchema = Schema({
  // Model attributes are defined here
  nama: {
    type: String,
    maxlength: [255, 'Panjang maksimal nama adalah 255 karakter'],
    required: [true, 'Nama alamat harus di isi']
    // allowNull defaults to true
  },
  kelurahan: {
    type: String,
    maxlength: [255, 'Panjang maksimal nama kelurahan adalah 255 karakter'],
    required: [true, 'Nama kelurahan harus di isi']
    // allowNull defaults to true
  },
  kecamatan: {
    type: String,
    maxlength: [255, 'Panjang maksimal nama kecamatan adalah 255 karakter'],
    required: [true, 'Nama kecamatan harus di isi']
    // allowNull defaults to true
  },
  kabupaten: {
    type: String,
    maxlength: [255, 'Panjang maksimal nama kabupaten adalah 255 karakter'],
    required: [true, 'Nama kabupaten harus di isi']
    // allowNull defaults to true
  },
  provinsi: {
    type: String,
    maxlength: [255, 'Panjang maksimal nama provinsi adalah 255 karakter'],
    required: [true, 'Nama provinsi harus di isi']
    // allowNull defaults to true
  },
  detail: {
    type: String,
    maxlength: [255, 'Panjang maksimal detail alamat adalah 255 karakter'],
    required: [true, 'Detail alamat harus di isi']
    // allowNull defaults to true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref:'User'
  }
}, {timestamps: true});

module.exports = model('DeliveryAddress', deliveryAddressSchema);