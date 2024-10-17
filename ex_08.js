if (breadCount >= 2 && hamCount >= 1 && tunaCount >= 1) {
    // Si tu as au moins 2 tranches de pain, 1 tranche de jambon et 1 boîte de thon,
    // alors tu peux faire un sandwich royal.
    displayThisText("I can make a royal sandwich!");
} else if (breadCount >= 2 && tunaCount >= 1) {
    // Si tu as au moins 2 tranches de pain et 1 boîte de thon, tu peux faire un sandwich au thon.
    displayThisText("I can make a tuna sandwich!");
} else if (breadCount >= 2 && hamCount >= 1) {
    // Si tu as au moins 2 tranches de pain et 1 tranche de jambon, tu peux faire un sandwich au jambon.
    displayThisText("I can make a ham sandwich!");
} else {
    // Si aucune des conditions précédentes n'est remplie, tu ne peux faire aucun sandwich et tu "jeûnes".
    displayThisText("I'd rather be fasting tonight");
}
