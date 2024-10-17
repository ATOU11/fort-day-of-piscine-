if (bananasCount == 0) {
    // Si bananasCount est égal à 0, affiche le texte correspondant.
    displayThisText("Oh no, there is no banana");
} else if (bananasCount > 0) {
    // Si bananasCount est supérieur à 0, affiche "Yummy!".
    displayThisText("Yummy!");
} else {
    // Si bananasCount est inférieur à 0, affiche "Do I owe you bananas?".
    // Ici, on n'a pas besoin de vérifier avec "bananasCount < 0" car c'est déjà implicitement compris.
    displayThisText("Do I owe you bananas?");
}
