// HTML en JS
let body = document.body;
let premiereSection = document.createElement("section");
//rajoute en premier
body.prepend(premiereSection);
console.log(premiereSection);
// ici je fais une boucle pour mes Divs car j'ai la flemme de retaper vu que j'aurais plusieurs div
let compteur1 = 0;
while (compteur1 < 7) {
    let div = document.createElement("div");
    var divNom = document.getElementsByTagName("div");
    premiereSection.append(div);
    console.log(compteur1);
    compteur1++;
}
// DIV 1
// travail dans mon premier div plus log test
let h1 = document.createElement("h1");
console.log(h1);
// ecrire du txt par contre faut le creer innerText marche pas 
let h1Txt = document.createTextNode("Calculatrice Hilal");
console.log(h1Txt);
h1.append(h1Txt)
divNom[0].append(h1);

// DIV 2
// me faut un bouton et input
let premierInput = document.createElement("input");
premierInput.setAttribute("type", "text");
// J'ai essayer avec readonly mais ne marche pas. Je dois mettre en disabled sinon on peut ecrire dedans 
premierInput.setAttribute("disabled", "");
let clear = document.createElement("button");
divNom[1].append(premierInput, clear);

// DIV 3
// MES BOUTONS par 4 comme dans exemple Ayhan
let compteur2 = 0;
let bouton;
while (compteur2 < 4) {
    // me faut 4 boutons
    bouton = document.createElement("button");
    divNom[2].append(bouton);
    var premierBoutons = divNom[2].getElementsByTagName("button");
    console.log(compteur2);
    compteur2++;
}

// Div4
let compteur3 = 0;
while (compteur3 < 4) {
    bouton = document.createElement("button");
    divNom[3].append(bouton);
    var deuxiemeBoutons = divNom[3].getElementsByTagName("button");
    console.log(compteur3);
    compteur3++;
}

// DIV 5
let compteur4 = 0;
while (compteur4 < 4) {
    bouton = document.createElement("button");
    divNom[4].append(bouton);
    var troisiemeBoutons = divNom[4].getElementsByTagName("button");
    console.log(compteur4);
    compteur4++;
}
// DIV 6
let compteur5 = 0;
while (compteur5 < 4) {
    bouton = document.createElement("button");
    divNom[5].append(bouton);
    var quatreBoutons = divNom[5].getElementsByTagName("button");
    console.log(compteur5);
    compteur5++;
}
// FIN HTML en JS