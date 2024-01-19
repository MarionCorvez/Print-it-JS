/// Déclaration des variables

// Tableau des slides
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

// Construction du contenu des slides
const slideImage = document.querySelector(".banner-img");
const slideTagLine = document.querySelector("#banner p");

// Déclaration des flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Création d'un compteur pour les slides
let currentIndex = 0;

// Afichage de l'image et de la tagLine correspondant à l'index en cours d'affichage
function updateSlide() {
	slideImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
	slideTagLine.innerHTML = slides[currentIndex].tagLine;
}


/// Gestion des bullet points

// Récupération du nombre de slides
let totalItems = slides.length;
const listDots = document.querySelector(".dots");

// Ajout des bullet points sur la partie basse du slider
function addDots(p) {
  const itemDot = document.createElement("div");
  itemDot.classList.add("dot");
  listDots.appendChild(itemDot);

  // Ajout de la navigation sur chaque dot
  itemDot.addEventListener("click", () => {
  currentIndex = p;
	updateSlide();
	updateDots();
	})
}

// Affichage d'un point par image contenue dans le slider
for (let i = 0; i < totalItems; i++) {
  addDots(i);
}


/// Gestion de la classe dot_selected

// Ajout de la classe sur la première slide
let currentDot = document.querySelector(".dot:first-child");
currentDot.classList.add("dot_selected");

// Création d'une fonction pour gérer l'affichage de la classe pour chaque dot
function updateDots() {
	const dot = document.querySelectorAll('.dot');
	// Applique la fonction pour chaque dot à chaque index
	dot.forEach((dot, i) =>  {
		// Si la classe dot_selected est présente, elle est supprimée ; sinon ajoutée
		dot.classList.toggle('dot_selected', i === currentIndex);
	});
}


/// Gestion du défilement du carrousel

// Ajout d'un event listener sur chacune des flèches
arrowLeft.addEventListener("click", () => {
	// Différenciation du clic sur le bouton gauche du clic sur le bouton droit
  console.log("Vous avez cliqué sur la flèche de gauche")

  // Modification de la slide au clic sur le bouton
  // Si on est à la première slide, on affiche la dernière
  if (currentIndex === 0) {
  	currentIndex = totalItems - 1;
  } else {
  	// Sinon, on décrémente le compteur de 1
  	currentIndex--;
  }
  // Appel des fonctions précédentes
  updateSlide();
  updateDots();

});

arrowRight.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche de droite")

  // Si on est à la dernière slide, on affiche la première
  if (currentIndex === totalItems - 1) {
  	currentIndex = 0;
  } else {
  	// Sinon, on incrémente le compteur de 1
  	currentIndex++;
  }
  updateSlide();
  updateDots();

});