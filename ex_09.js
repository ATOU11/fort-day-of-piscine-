// Affichage de la valeur de la variable input_var
displayThisText("The variable value is '" + input_var + "'.");

// Vérification du type de la variable input_var
if (typeof input_var === "string") {
    // Si input_var est de type string, afficher son type
    displayThisText("Its type is String");
} else if (typeof input_var === "boolean") {
    // Si input_var est de type boolean, afficher son type
    displayThisText("Its type is Boolean");
} else if (Number.isInteger(input_var)) {
    // Si input_var est un entier, afficher son type
    displayThisText("Its type is Integer");
} else if (typeof input_var === "number" && Number.isFinite(input_var)) {
    // Si input_var est un nombre (mais pas un entier), afficher qu'il s'agit d'un float
    displayThisText("Its type is Float");
} else {
    // Si le type n'est pas reconnu, on peut éventuellement afficher une erreur
    displayThisText("Its type is unknown");
}

// Vérification si input_var est égal à 42
if (input_var == 42) {
    // Si la valeur de input_var est 42, afficher le message correspondant
    displayThisText("It is the meaning of life");
}
