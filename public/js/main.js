import { mesBoutons } from "./methode.js";
// HTML en JS
let body = document.body;
let premiereSection = document.createElement("section");
premiereSection.className="maSection";
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
h1.append(h1Txt);
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
    console.log(premierBoutons);
    console.log(compteur2);
    compteur2++;
}

// Div4
let compteur3 = 0;
while (compteur3 < 4) {
    bouton = document.createElement("button");
    divNom[3].append(bouton);
    var deuxiemeBoutons = divNom[3].getElementsByTagName("button");
    console.log(deuxiemeBoutons);
    console.log(compteur3);
    compteur3++;
}

// DIV 5
let compteur4 = 0;
while (compteur4 < 4) {
    bouton = document.createElement("button");
    divNom[4].append(bouton);
    var troisiemeBoutons = divNom[4].getElementsByTagName("button");
    console.log(troisiemeBoutons);
    console.log(compteur4);
    compteur4++;
}
// DIV 6
let compteur5 = 0;
while (compteur5 < 4) {
    bouton = document.createElement("button");
    divNom[5].append(bouton);
    var quatreBoutons = divNom[5].getElementsByTagName("button");
    console.log(quatreBoutons);
    console.log(compteur5);
    compteur5++;
}
// DIV 7
let sombre = document.createElement("button");
sombre.className="sombre";
sombre.innerText ="MODE SOMBRE"
divNom[6].append(sombre);
sombre.addEventListener("click",()=>{
    console.log('test');
    let divtout = document.querySelectorAll("div")
    divtout.forEach(element => {
        element.classList.toggle("sombresection");
        console.log(element);
    });
    console.log(divtout);
    premiereSection.classList.toggle('sombresection')
    // premiereSection.style.backgroundColor="black"
    // premiereSection.style.margin = "auto"
    // premiereSection.classList.toggle("sombre")
    
})

// FIN HTML en JS

// ici
mesBoutons();
// bouton avec chiffre et operator en text sur ma page
// let boutonTout = document.getElementsByTagName("button");

// for (let index = 0; index < boutonTout.length; index++) {
//     if (index == 0) {
//         // je rajoute du txt,class,id pour chaque bouton que j'ai rajouté en haut
//         boutonTout[0].setAttribute("id", "clear");
//         boutonTout[0].innerHTML = "C";
//         console.log(boutonTout[0]);
//     } else if (index == 1) {
//         boutonTout[1].setAttribute("class", "chiffres");
//         boutonTout[1].innerHTML = "7";
//         console.log(boutonTout[1]);
//     } else if (index == 2) {
//         boutonTout[2].setAttribute("class", "chiffres");
//         boutonTout[2].innerHTML = "8";
//         console.log(boutonTout[2]);
//     } else if (index == 3) {
//         boutonTout[3].setAttribute("class", "chiffres");
//         boutonTout[3].innerHTML = "9";
//         console.log(boutonTout[3]);
//     } else if (index == 4) {
//         boutonTout[4].setAttribute("class", "operations");
//         boutonTout[4].innerHTML = "/";
//         console.log(boutonTout[4]);
//     } else if (index == 5) {
//         boutonTout[5].setAttribute("class", "chiffres");
//         boutonTout[5].innerHTML = "4";
//         console.log(boutonTout[5]);
//     } else if (index == 6) {
//         boutonTout[6].setAttribute("class", "chiffres");
//         boutonTout[6].innerHTML = "5";
//         console.log(boutonTout[6]);
//     } else if (index == 7) {
//         boutonTout[7].setAttribute("class", "chiffres");
//         boutonTout[7].innerHTML = "6";
//         console.log(boutonTout[7]);
//     } else if (index == 8) {
//         boutonTout[8].setAttribute("class", "operations");
//         boutonTout[8].innerHTML = "*";
//         console.log(boutonTout[8]);
//     } else if (index == 9) {
//         boutonTout[9].setAttribute("class", "chiffres");
//         boutonTout[9].innerHTML = "1";
//         console.log(boutonTout[9]);
//     }
//     else if (index == 10) {
//         boutonTout[10].setAttribute("class", "chiffres");
//         boutonTout[10].innerHTML = "2";
//         console.log(boutonTout[10]);
//     }else if (index == 11) {
//         boutonTout[11].setAttribute("class", "chiffres");
//         boutonTout[11].innerHTML = "3";
//         console.log(boutonTout[11]);

//     }else if (index == 12) {
//         boutonTout[12].setAttribute("class", "operations");
//         boutonTout[12].innerHTML = "-";
//         console.log(boutonTout[12]);

//     }else if (index == 13) {
//         boutonTout[13].setAttribute("class", "chiffres");
//         boutonTout[13].innerHTML = "0";
//         console.log(boutonTout[13]);

//     }else if (index == 14) {
//         boutonTout[14].setAttribute("class", "chiffres");
//         boutonTout[14].innerHTML = ".";
//         console.log(boutonTout[14]);
//     }else if (index == 15) {
//         boutonTout[15].setAttribute("id", "egal");
//         boutonTout[15].innerHTML = "=";
//         console.log(boutonTout[15]);
//     }else if (index == 16) {
//         boutonTout[16].setAttribute("class", "operations");
//         boutonTout[16].innerHTML = "+";
//         console.log(boutonTout[16]);
//     }
// }
// ici



// mettre mes valeurs dans mes boutons CHIFFRES et "."
// pas de operations, egal, clear, juste chiffre
let chiffreTout = document.querySelectorAll(".chiffres");

for (let index = 0; index < chiffreTout.length; index++) {
    if (index == 0) {
        chiffreTout[0].value = "7";
        console.log(chiffreTout[0].value);
    }else if (index == 1) {
        chiffreTout[1].value = "8";
        console.log(chiffreTout[1].value);

    }else if (index == 2) {
        chiffreTout[2].value = "9";
        console.log(chiffreTout[2].value);

    }else if (index == 3) {
        chiffreTout[3].value = "4";
        console.log(chiffreTout[3].value);

    }else if (index == 4) {
        chiffreTout[4].value = "5";
        console.log(chiffreTout[4].value);

    }else if (index == 5) {
        chiffreTout[5].value = "6";
        console.log(chiffreTout[5].value);

    }else if (index == 6) {
        chiffreTout[6].value = "1";
        console.log(chiffreTout[6].value);

    }else if (index == 7) {
        chiffreTout[7].value = "2";
        console.log(chiffreTout[7].value);

    }else if (index == 8) {
        chiffreTout[8].value = "3";
        console.log(chiffreTout[8].value);

    }else if (index == 9) {
        chiffreTout[9].value = "0";
        console.log(chiffreTout[9].value);

    }else if (index == 10) {
        chiffreTout[10].value = ".";
        console.log(chiffreTout[10].value);

    }
}

// mettre mes valeurs dans mes boutons + - * /

let operatorTout = document.querySelectorAll(".operations");
let vide = "";

for (let index = 0; index < operatorTout.length; index++) {

    if (index==0) {
        operatorTout[0].value="/";
        console.log(operatorTout[0].value);
    }else if (index==1) {
        operatorTout[1].value="*";
        console.log(operatorTout[1].value);
    }else if (index==2) {
        operatorTout[2].value="-";
        console.log(operatorTout[2].value);
    }else if (index==3) {
        operatorTout[3].value="+";
        console.log(operatorTout[3].value);
    };
    // rajoute mes operator en cliquant
    operatorTout[index].addEventListener("click",function(){
        // je stock la valeur dans ma variable
        vide = this.value;
        console.log(this.value);
        // je mets ma variable dans mon input
        premierInput.value = vide;
        
        console.log(vide);
    })
}


// bouton effacer
let effacer = document.querySelector("#clear");
effacer.addEventListener("click",()=>{
    // egale a rien
    premierInput.value = "";
    value1="";
    value2="";
    vide="";
});
let value1;
let value2;

let egal = document.querySelector("#egal");

for (let index = 0; index < chiffreTout.length; index++) {
    chiffreTout[index].addEventListener("click",()=>{
        switch (vide) {
            // ici je rajoute mes chiffre en boucle en plus dans mon input pour avoir plusiuers.
            // premiere valeur
            case "":
                premierInput.value += chiffreTout[index].value;
                value1= Number(premierInput.value);
                console.log(value1);
                break;
            // deuxieme valeur a mettre en boucle dans le input
            default:
                premierInput.value += chiffreTout[index].value;
                // je n'arrive pas a retirer mon operator
                value2= Number(premierInput.value.slice(1, premierInput.value.length));
                console.log(value2);
                break;
        }
    })
    
}

// Faire les opérations de base : addition, soustraction, division, multiplication. 
// Mon calcul se passe ici
egal.addEventListener("click",()=>{
    if (vide=="+") {
        premierInput.value=value1+value2;
        console.log(premierInput.value);
    }else if (vide=="-") {
        premierInput.value=value1-value2;
        console.log(premierInput.value);
        
        
    }else if (vide=="*") {
        premierInput.value=value1*value2;
        console.log(premierInput.value);

        
    }else if (vide=="/") {
        premierInput.value=value1/value2;
        console.log(premierInput.value);

        
    }else{
        value1="";
        value2="";
        vide="";
    }
})
