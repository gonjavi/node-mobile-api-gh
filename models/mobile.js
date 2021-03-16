const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
  brand: { type: String, required: [true, 'Add the brand'] },
  model: { type: String, required: [true, 'Add the model'] },
  camara_resolution: { type: String, required: false },
  memoria: { type: String, required: false },
  price:  { type: Number, required: false }
});

module.exports = mongoose.model('Mobile', mobileSchema);

