// R�cup�re le bouton par son ID
const bouton = document.getElementById("monBouton");
const paragraphe = document.getElementById("monTexte");
let appuyage = 0

// Ajoute un �couteur d'�v�nements pour le clic
bouton.addEventListener("click", function() 
{
    appuyage = appuyage + 1;

    console.log(appuyage);
    paragraphe.innerHTML = "Your click : " + appuyage;
});

/* fetch('https://ton-backend-sur-render.com/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nom: 'M1N0', message: 'Hello Backend!' }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Réponse du serveur :', data);
    })
    .catch((error) => console.error('Erreur :', error));

    const variable = "Salut, backend !"; // La donnée que tu veux transférer*/

fetch('https://ton-backend-sur-render.com/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ maVariable: variable }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Réponse du serveur :', data); // Affiche la réponse du serveur
  })
  .catch((error) => console.error('Erreur :', error));
