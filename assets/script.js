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

// Flèche de gauche
const arrowLeft = document.querySelector(".arrow_left");

// Mettre un event listener sur chacune des flèches
arrowLeft.addEventListener("click", () => {
	// S'assurer qu'on peut différencier le clic sur le bouton gauche du clic sur le bouton droit
  console.log("Vous avez cliqué sur la flèche de gauche")

  // Modifier le slide au clic sur le bouton
  if (currentIndex === 0) {
  	currentIndex = totalDots - 1;
  } else {
  	currentIndex--;
  }
  updateSlide()

});

// Flèche de droite
const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche de droite")

  if (currentIndex === totalDots - 1) {
  	currentIndex = 0;
  } else {
  	currentIndex++;
  }
  updateSlide()

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


/// Étape 4 : Modifier le slide au clic sur le bouton
/*
Au clic sur la flèche droite : 
on change le bullet point actif au suivant ;
on change l’image ;
on change le texte correspondant à l’image.
Au clic sur la flèche gauche, nous faisons la même chose mais pour les éléments précédents. 
Pour changer l’image, pensez à bien construire le chemin de la nouvelle image.
Pour intégrer le texte, utilisez la propriété innerHTML et insérez la tagLine de la slide.
Travaillez avec les index du tableau. 
*/

const slideImage = document.querySelector(".banner-img");
const slideTagLine = document.querySelector("#banner p");

let currentIndex = 0;

function updateSlide() {
	slideImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	slideTagLine.innerHTML = slides[currentIndex].tagLine;
}