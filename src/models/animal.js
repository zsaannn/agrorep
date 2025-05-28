const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
  identificacion: { type: String, required: true, unique: true },
  fechaNacimiento: { type: Date , required: true },
  raza: { type: String },
  sexo: { type: String, enum: ['Macho', 'Hembra'] },
  estado: { type: String, enum: ['Activo', 'Vendido', 'Muerto'], default: 'Activo' },
  numeroPartos: { type: Number, default: 0 },
  peso: { type: Number },
  notas: { type: String }
}, {
  timestamps: true // agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Animal', AnimalSchema);
