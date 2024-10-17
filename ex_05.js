// Déclaration des variables avec les valeurs spécifiées
const firstname = "John";           // Chaîne de caractères pour le prénom
const lastname = "Doe";             // Chaîne de caractères pour le nom
const cardCode = "1111222233334444"; // Chaîne de caractères pour le code de la carte (sans espaces)
const expiryDateMonth = 21;         // Entier pour le mois d'expiration
const expiryDateYear = 2042;        // Entier pour l'année d'expiration

// Construction de la chaîne computedBankInfo à partir des autres variables
let computedBankInfo = firstname + "," + lastname + "," + cardCode + "," + expiryDateMonth + "/" + expiryDateYear;

// Appel de la fonction displayInCard pour afficher le résultat
displayInCard(computedBankInfo);    // Affiche les informations dans une carte (ou une autre interface selon ta fonction)
