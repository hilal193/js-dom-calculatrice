// bouton avec chiffre et operator en text sur ma page
export let mesBoutons=()=>{
    let boutonTout = document.getElementsByTagName("button");

    for (let index = 0; index < boutonTout.length; index++) {
        if (index == 0) {
            // je rajoute du txt,class,id pour chaque bouton que j'ai rajouté en haut
            boutonTout[0].setAttribute("id", "clear");
            boutonTout[0].innerHTML = "C";
            console.log(boutonTout[0]);
        } else if (index == 1) {
            boutonTout[1].setAttribute("class", "chiffres");
            boutonTout[1].innerHTML = "7";
            console.log(boutonTout[1]);
        } else if (index == 2) {
            boutonTout[2].setAttribute("class", "chiffres");
            boutonTout[2].innerHTML = "8";
            console.log(boutonTout[2]);
        } else if (index == 3) {
            boutonTout[3].setAttribute("class", "chiffres");
            boutonTout[3].innerHTML = "9";
            console.log(boutonTout[3]);
        } else if (index == 4) {
            boutonTout[4].setAttribute("class", "operations");
            boutonTout[4].innerHTML = "/";
            console.log(boutonTout[4]);
        } else if (index == 5) {
            boutonTout[5].setAttribute("class", "chiffres");
            boutonTout[5].innerHTML = "4";
            console.log(boutonTout[5]);
        } else if (index == 6) {
            boutonTout[6].setAttribute("class", "chiffres");
            boutonTout[6].innerHTML = "5";
            console.log(boutonTout[6]);
        } else if (index == 7) {
            boutonTout[7].setAttribute("class", "chiffres");
            boutonTout[7].innerHTML = "6";
            console.log(boutonTout[7]);
        } else if (index == 8) {
            boutonTout[8].setAttribute("class", "operations");
            boutonTout[8].innerHTML = "*";
            console.log(boutonTout[8]);
        } else if (index == 9) {
            boutonTout[9].setAttribute("class", "chiffres");
            boutonTout[9].innerHTML = "1";
            console.log(boutonTout[9]);
        }
        else if (index == 10) {
            boutonTout[10].setAttribute("class", "chiffres");
            boutonTout[10].innerHTML = "2";
            console.log(boutonTout[10]);
        }else if (index == 11) {
            boutonTout[11].setAttribute("class", "chiffres");
            boutonTout[11].innerHTML = "3";
            console.log(boutonTout[11]);
    
        }else if (index == 12) {
            boutonTout[12].setAttribute("class", "operations");
            boutonTout[12].innerHTML = "-";
            console.log(boutonTout[12]);
    
        }else if (index == 13) {
            boutonTout[13].setAttribute("class", "chiffres");
            boutonTout[13].innerHTML = "0";
            console.log(boutonTout[13]);
    
        }else if (index == 14) {
            boutonTout[14].setAttribute("class", "chiffres");
            boutonTout[14].innerHTML = ".";
            console.log(boutonTout[14]);
        }else if (index == 15) {
            boutonTout[15].setAttribute("id", "egal");
            boutonTout[15].innerHTML = "=";
            console.log(boutonTout[15]);
        }else if (index == 16) {
            boutonTout[16].setAttribute("class", "operations");
            boutonTout[16].innerHTML = "+";
            console.log(boutonTout[16]);
        }
    }
    
}




