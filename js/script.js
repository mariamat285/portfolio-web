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
// ===== VALIDATION DU FORMULAIRE DE CONTACT =====
function validerFormulaire() {
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let email = document.getElementById("email").value.trim();
    let objet = document.getElementById("objet").value.trim();
    let message = document.getElementById("message").value.trim();
    let zoneStatut = document.getElementById("message_statut");

    // Vérification : tous les champs obligatoires
    if (nom === "" || prenom === "" || email === "" || objet === "" || message === "") {
        zoneStatut.textContent = "Veuillez remplir tous les champs avant d'envoyer.";
        zoneStatut.className = "message-statut erreur";
        return;
    }

    // Vérification : email valide avec une expression régulière
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(email) === false) {
        zoneStatut.textContent = "Veuillez entrer une adresse email valide.";
        zoneStatut.className = "message-statut erreur";
        return;
    }

    // Si tout est valide : message de confirmation
    zoneStatut.textContent = "Votre message a bien été envoyé ! Je vous répondrai bientôt.";
    zoneStatut.className = "message-statut succes";

    // On vide le formulaire après succès
    document.getElementById("formulaire_contact").reset();
}
// ===== TRANSITION VERTICALE ENTRE LES PAGES =====
// Quand on clique sur un lien interne, on lance l'animation de sortie
// avant de charger la page suivante
document.addEventListener("DOMContentLoaded", function () {
    let liens = document.querySelectorAll("a[href$='.html']");

    for (let i = 0; i < liens.length; i++) {
        liens[i].addEventListener("click", function (evenement) {
            let destination = liens[i].getAttribute("href");

            // On bloque le changement de page immédiat
            evenement.preventDefault();

            // On lance l'animation de sortie (glissement vers le haut)
            document.body.classList.add("sortie");

            // On attend la fin de l'animation avant de changer de page
            setTimeout(function () {
                window.location.href = destination;
            }, 400);
        });
    }
});
let btnHamburger = document.getElementById("btn_menu");
let menu = document.getElementById("menu");

btnHamburger.addEventListener("click", function () {
    menu.classList.toggle("ouvert");
});
// ===== AFFICHER / MASQUER LES DÉTAILS D'UNE COMPÉTENCE =====
function toggleDetails(idElement) {
    let element = document.getElementById(idElement);
    element.classList.toggle("visible");
}
// ===== AFFICHER / MASQUER LES DÉTAILS D'UN PROJET =====
function toggleProjet(idElement) {
    let element = document.getElementById(idElement);
    element.classList.toggle("visible");
}



