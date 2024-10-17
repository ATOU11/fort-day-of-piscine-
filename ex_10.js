// Initialisation des compteurs de sandwiches
let hamsandwiches = 0; 
let tunasandwiches = 0; 
let vegetariansandwiches = 0; 

// Boucle pour créer des sandwiches au jambon
while (breadCount >= 2 && hamCount >= 1) { 
    hamsandwiches += 1; // Incrémente le compteur de sandwiches au jambon
    breadCount -= 2; // Retire 2 tranches de pain
    hamCount -= 1; // Retire 1 tranche de jambon
}

// Boucle pour créer des sandwiches au thon
while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
    tunasandwiches += 1; // Incrémente le compteur de sandwiches au thon
    breadCount -= 2; // Retire 2 tranches de pain
    tunaCount -= 1; // Retire 1 boîte de thon
    saladCount -= 2; // Retire 2 feuilles de salade
} 

// Boucle pour créer des sandwiches végétariens
while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
    vegetariansandwiches += 1; // Incrémente le compteur de sandwiches végétariens
    breadCount -= 2; // Retire 2 tranches de pain
    saladCount -= 1; // Retire 1 feuille de salade
    tomatoCount -= 2; // Retire 2 tranches de tomate
}

// Affichage du nombre de chaque type de sandwich préparé
displayThisText("Number of ham sandwiches: " + hamsandwiches);
displayThisText("Number of tuna sandwiches: " + tunasandwiches);
displayThisText("Number of vegetarian sandwiches: " + vegetariansandwiches);

// Appel de la fonction pour afficher les ingrédients restants
displayIngredients();
