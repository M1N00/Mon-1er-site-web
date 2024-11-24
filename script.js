
const bouton = document.getElementById("monBouton");
const paragraphe = document.getElementById("monTexte");
const Text_HTML_Clic_totaux = document.getElementById("NbrCliqueMonde");
const Pourcent = document.getElementById("Pourcentage");
const Bar_de_progression = document.getElementById("Bar_de_progression");
let Image_html = document.getElementById("Image");
let appuyage = 0

let Clic_cette_seconde_10;


setInterval(()=>{
  console.log("Nbr de clic enregistrer ces 10 secondes : "+ Clic_cette_seconde_10);
  if(Clic_cette_seconde_10 > 120)
  {
    window.location.href = "https://mon-1er-site-web.vercel.app/cheat.html";
  }
},10000);
setInterval(()=>{
  Clic_cette_seconde_10 = 0;
  console.log("Nbr de clic enregistrer ces 10 secondes : "+ Clic_cette_seconde_10);
},10090);


// Ajoute un �couteur d'�v�nements pour le clic
bouton.addEventListener("click", function() 
{
  Clic_cette_seconde_10 = Clic_cette_seconde_10 + 1;


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

setInterval(()=>{
  fetch('https://mon-1er-site-web.onrender.com/api/variable') // Appelle la route du backend
  .then((response) => response.json()) // Convertit la réponse en objet JavaScript
  .then((data) => {
    console.log('Le total des clics :', data.message); // Affiche la variable
    Text_HTML_Clic_totaux.innerHTML = "click from everyone in the world : " + data.message;

    

    Pourcent.innerHTML = data.message / 10000 + " percent finish";

    Bar_de_progression.value = data.message / 10000;

    if(data.message > 1000000)
    {
      console.log("on a dépassé 100")
      
      Image_html.style.width = "50%"
      Image_html.style.height  = "50%"
    }
  })
  .catch((error) => console.error('Erreur :', error)); // En cas d'erreur
},1000);







