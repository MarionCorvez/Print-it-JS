const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];


/// Étape 2 : Ajouter des Event Listeners sur les flèches

// Mettre un event listener sur chacune des flèches
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
	// S'assurer qu’on peut différencier le clic sur le bouton gauche du clic sur le bouton droit
  console.log("Vous avez cliqué sur la flèche de gauche")
});

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche de droite")
});


/// Étape 3 : Ajouter des bullet points au slider

// Ajouter les bullet points sur la partie basse du slider
function addDots() {
  const listDots = document.querySelector(".dots");
  const dot = document.createElement("div")
  dot.classList.add("dot")
  listDots.appendChild(dot)
}

// Afficher un point par image contenue dans le slider
let totalDots = slides.length;

for(let i = 0; i < totalDots; i++) {
  addDots();
}

// Différencier le point qui signale la diapositive en cours de visionnage
let currentDot = document.querySelector(".dot:first-child");
currentDot.classList.add("dot_selected");