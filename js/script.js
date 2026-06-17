// ===== EFFET TYPEWRITER (page d'accueil uniquement) =====
let mots = [
    "Étudiante en Data Science",
    "Passionnée par l'IA",
    "Aspirante Chercheuse",
    "Développeuse en devenir"
];

let indice_mot = 0;
let indice_lettre = 0;
let effacement = false;

function taper() {
    let element = document.getElementById("type_de_texte");
    if (!element) {
        return;
    }

    let motActuel = mots[indice_mot];

    if (effacement === false) {
        indice_lettre++;
        element.textContent = motActuel.slice(0, indice_lettre);

        if (indice_lettre === motActuel.length) {
            effacement = true;
            setTimeout(taper, 1500);
            return;
        }
    } else {
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

// ===== MESSAGE DE BIENVENUE =====
function fermerBienvenue() {
    let overlay = document.getElementById("message_bienvenue");
    if (overlay) {
        overlay.style.display = "none";
    }
}

// ===== VALIDATION DU FORMULAIRE DE CONTACT =====
function validerFormulaire() {
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let email = document.getElementById("email").value.trim();
    let objet = document.getElementById("objet").value.trim();
    let message = document.getElementById("message").value.trim();
    let zoneStatut = document.getElementById("message_statut");

    if (nom === "" || prenom === "" || email === "" || objet === "" || message === "") {
        zoneStatut.textContent = "Veuillez remplir tous les champs avant d'envoyer.";
        zoneStatut.className = "message-statut erreur";
        return;
    }

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(email) === false) {
        zoneStatut.textContent = "Veuillez entrer une adresse email valide.";
        zoneStatut.className = "message-statut erreur";
        return;
    }

    zoneStatut.textContent = "Votre message a bien été envoyé ! Je vous répondrai bientôt.";
    zoneStatut.className = "message-statut succes";
    document.getElementById("formulaire_contact").reset();
}

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

// ===== UN SEUL POINT D'ENTRÉE : tout se met en place ici =====
window.onload = function () {

    // Lancer l'effet typewriter (s'il y a un élément #type_de_texte sur la page)
    setTimeout(taper, 1000);

    // Menu hamburger responsive
    let btnHamburger = document.getElementById("btn_menu");
    let menu = document.getElementById("menu");

    if (btnHamburger && menu) {
        btnHamburger.addEventListener("click", function () {
            menu.classList.toggle("ouvert");
        });
    }

    // Transition verticale entre les pages
    let liens = document.querySelectorAll("a[href$='.html']");

    for (let i = 0; i < liens.length; i++) {
        liens[i].addEventListener("click", function (evenement) {
            let destination = liens[i].getAttribute("href");
            evenement.preventDefault();
            document.body.classList.add("sortie");
            setTimeout(function () {
                window.location.href = destination;
            }, 400);
        });
    }
};