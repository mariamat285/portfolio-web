// Création de ma présantation sous forme d'écriture que je tape
let mots = [
    "Étudiante en Data Science",
    "Passionnée par l'IA",
    "Aspirante Chercheuse",
    "Développeuse en devenir"
];

let indice_mot = 0;
let indice_lettre = 0;
let effacement = false;

//utilisation de la methode document.getElementById
let element = document.getElementById("type_de_texte");

function taper() {
    let motActuel = mots[indice_mot];
    if (effacement === false) {
        indice_lettre++;
        element.textContent = motActuel.slice(0, indice_lettre);

        if (indice_lettre === motActuel.length) {
            effacement = true;
            setTimeout(taper, 1500);
            return;
        }
    }
    else {
        indice_lettre--;
        element.textContent = motActuel.slice(0, indice_lettre);

        if (indice_lettre === 0) {
            effacement = false;
            indice_mot = (indice_mot + 1) % mots.length;
        }
    }
    if (effacement === true) {
        setTimeout(taper, 60);
    } else {
        setTimeout(taper, 100);
    }
}

window.onload = function () {
    setTimeout(taper, 1000);
    //button pour le menu risponsive
    // Menu hamburger
    let btnHamburger = document.getElementById("btn_menu");
    let menu = document.getElementById("menu");

    btnHamburger.addEventListener("click", function() {
    menu.classList.toggle("ouvert");
});

}
// Fonction pour fermer le message de bienvenue
function fermerBienvenue() {
    let overlay = document.getElementById("message_bienvenue");
    overlay.style.display = "none";
}







