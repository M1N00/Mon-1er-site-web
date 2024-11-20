const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour gérer les JSON
app.use(express.json());

// Exemple : route pour stocker des données
app.post('/api/data', (req, res) => {
  const data = req.body; // Récupère les données envoyées par ton site
  console.log(data); // Affiche-les dans la console pour l'instant
  res.json({ message: 'Données reçues avec succès !' });
});

// Démarre le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
