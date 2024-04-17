
require('dotenv').config(); // Assurez-vous que dotenv est installé et configuré
console.log(process.env.MONGO_URI); // Ajoutez ceci pour débugger

const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Exemple de route simple
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre serveur Node.js!');
});

// Connectez Mongoose ici si vous travaillez avec MongoDB
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie.'))
.catch(err => console.error('Échec de la connexion à MongoDB:', err));

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

module.exports = app;
