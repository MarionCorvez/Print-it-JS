const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/// Étape 2 : Ajouter des Event Listeners sur les flèches

// Mettre un event listener sur chacune des flèches
// Ajouter un console.log ou une alert() pour tester le fonctionnement des event listeners
// S'assurer qu'on peut différencier le clic sur le bouton gauche du clic sur le bouton droit. 

// Solution 1
/*let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche de gauche")
});

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  console.log("Vous avez cliqué sur la flèche de droite")
});*/


// Solution 2 : ajout d'un ID
/*let listArrows = document.querySelectorAll(".arrow");

for (let i = 0; i < listArrows.length; i++) {
	let currentArrow = listArrows[i]
	console.log(currentArrow)

	currentArrow.addEventListener("click", (event) => {
		myArrow = event.target.className
		console.log(`J'ai cliqué sur la flèche : ${myArrow.id}`);
	});
	
}*/

// Solution 3 : affichage des classes
let listArrows = document.querySelectorAll(".arrow");

for (let i = 0; i < listArrows.length; i++) {
	let currentArrow = listArrows[i]
	console.log(currentArrow)

	currentArrow.addEventListener("click", (event) => {
		myArrow = event.target.className
    console.log(`J'ai cliqué sur la flèche : ${myArrow}`);
	});
	
}