// Récupère le bouton par son ID
const bouton = document.getElementById("monBouton");
const paragraphe = document.getElementById("monTexte");
let appuyage = 0

// Ajoute un écouteur d'événements pour le clic
bouton.addEventListener("click", function() 
{
    appuyage = appuyage + 1;

    console.log(appuyage);
    paragraphe.innerHTML = "Your click : " + appuyage;
});

