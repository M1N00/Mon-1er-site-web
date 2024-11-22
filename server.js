const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour gérer les JSON
app.use(express.json());

app.post('/api/data', (req, res) => {
  const variableReçue = req.body.maVariable; // Récupère la variable envoyée par le client
  console.log('Donnée reçue :', variableReçue); // Affiche la variable dans la console du serveur

  // Répond au client pour confirmer la réception
  res.json({ message: `J'ai bien reçu ta variable : ${variableReçue}` });
});


app.get('/', (req, res) => {
  res.send('Félicitations ! Ton backend est en ligne ! 🎉');
});

// Démarre le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
