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







