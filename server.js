// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Carga variables del .env

const app = express();
app.use(express.json()); // Para manejar JSON en requests

// Ruta de prueba
app.get('/', (req, res) => {
	res.send('API ganadera funcionando!');
});

// Conectar a MongoDB con la URI del .env
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log('🟢 Conectado a MongoDB'))
	.catch(err => console.error('🔴 Error conectando a MongoDB:', err));

// Arrancar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

