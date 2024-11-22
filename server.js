const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let messageCount = 0; // Variable pour compter les messages

// Middleware pour gérer les JSON
app.use(express.json());

app.post('/api/data', (req, res) => {
  const variableReçue = req.body.maVariable; // Récupère la variable envoyée par le client
  console.log("une personne a cliqué", variableReçue); // Affiche la variable dans la console du serveur

  messageCount = messageCount+ 1;
  console.log("Le total de clic vaut", messageCount);
  // Répond au client pour confirmer la réception
  res.json({ message: `J'ai bien reçu ta variable : ${variableReçue}` });
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Ceci est une réponse GET pour /api/data' });
});

app.get('/', (req, res) => {
  res.send('Félicitations ! Ton backend est en ligne ! 🎉');
});

// Route pour envoyer une variable au frontend
app.get('/api/variable', (req, res) => {
  res.json({ message: messageCount }); // Envoie un objet JSON contenant la variable
});

// Démarre le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

const cors = require('cors');

// Autorise toutes les origines
app.use(cors());

