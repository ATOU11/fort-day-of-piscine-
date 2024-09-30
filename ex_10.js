let hamsandwiches= 0 
let tunasandwiches = 0
let vegetariansandwiches = 0 

while (breadCount >= 2 && hamCount >= 1) { 
hamsandwiches += 1 
breadCount -= 2
hamCount -= 1
}
while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
tunasandwiches += 1 
tunaCount -= 1
saladCount -= 2
} 

while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
vegetariansandwiches += 1
breadCount -= 2
saladCount -= 1
tomatoCount -= 2
}

displayThisText("Number of ham sandwih : " + hamsandwiches)
displayThisText("Number of tuna sandwih : " + tunasandwiches)
displayThisText("Number of vegetarian sandwih : " + vegetariansandwiches)
displayIngredients()
