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

    fetch('https://mon-1er-site-web.onrender.com/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ maVariable: appuyage }), //TODO faire en sorte que sa fasse l'adition de toute les machines
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Réponse du serveur :', data); // Affiche la réponse du serveur
      })
      .catch((error) => console.error('Erreur :', error));
});

fetch('https://ton-backend-sur-render.com/api/variable') // Appelle la route du backend
  .then((response) => response.json()) // Convertit la réponse en objet JavaScript
  .then((data) => {
    console.log('Le total des clics :', data.message); // Affiche la variable
    document.body.innerHTML += `<p>${data.message}</p>`; // L'affiche sur la page
  })
  .catch((error) => console.error('Erreur :', error)); // En cas d'erreur





