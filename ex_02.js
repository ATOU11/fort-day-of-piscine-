// Déclaration des variables
let integer = 42, 
    float = 42.42, 
    string = "forty two", 
    bool = true, 
    this_is_null = null;

// Fonction pour afficher la variable
function displayThisText(value) {
    console.log(value); // Affiche la valeur dans la console
}

// Appel de la fonction pour afficher chaque variable
displayThisText(integer);       // Affiche 42
displayThisText(float);         // Affiche 42.42
displayThisText(string);        // Affiche "forty two"
displayThisText(bool);          // Affiche true
displayThisText(this_is_null);  // Affiche null
