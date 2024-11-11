// Fonction pour vérifier si un élément est dans le champ de vision
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Animation d'apparition des sections au défilement
function animateOnScroll() {
    document.querySelectorAll('.animated-section, .project').forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('in-view');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});

// Animation au défilement pour afficher les éléments de la liste
const projectItems = document.querySelectorAll('.project-item, .sub-item');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    projectItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight - revealPoint) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: true,  // Permet de faire défiler en boucle
        slidesToShow: 1, // Afficher 1 image à la fois
        slidesToScroll: 1, // Faire défiler 1 image à la fois
        autoplay: true, // Activer la lecture automatique
        autoplaySpeed: 3000, // Temps entre chaque changement d'image (en ms)
        dots: true, // Afficher des points de pagination en bas
        arrows: true, // Afficher les flèches pour naviguer manuellement
    });
});

function openModal(img) {
    document.getElementById("imgModal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
}

function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll("a").forEach(link => link.classList.remove("active"));
        this.classList.add("active");

        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        // Fermer le menu mobile après le clic
        if (window.innerWidth <= 768) { // Vérifie si on est sur mobile
            const menu = document.querySelector("nav ul");
            menu.classList.toggle("show-menu");

        }
    });
});

function changeTheme(theme) {
    document.body.className = theme;
}

// Exemple pour changer le thème sur un événement (comme un clic sur un bouton)
document.getElementById('theme-selector').addEventListener('change', function (event) {
    changeTheme(event.target.value);
});

// Fonction pour appliquer le thème en ajoutant une classe au body
function applyTheme(theme) {
    document.body.className = theme;  // Ajoute la classe au body
    localStorage.setItem('selectedTheme', theme);  // Enregistre le thème dans localStorage
}

// Fonction pour charger le thème depuis localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');  // Récupère le thème sauvegardé
    if (savedTheme) {
        applyTheme(savedTheme);  // Applique le thème si trouvé
        document.getElementById('theme-selector').value = savedTheme;  // Sélectionne l'option du select
    }
}

// Ajout d'un événement pour détecter les changements dans le sélecteur
document.getElementById('theme-selector').addEventListener('change', function (event) {
    const selectedTheme = event.target.value;
    applyTheme(selectedTheme);  // Applique le thème sélectionné
});

// Charger le thème lorsque la page est chargée
window.onload = loadTheme;
// Fonction pour ajuster la taille du h1 lors du scroll
window.addEventListener('scroll', function () {
    const h1 = document.getElementById('dynamic-title');
    const scrollPosition = window.scrollY;
    const maxScroll = 1000;  // Distance maximale de scroll à partir de laquelle la taille du h1 est la plus petite
    const minFontSize = 1;  // Taille minimale de la police en rem
    const maxFontSize = 2;  // Taille maximale de la police en rem

    // Calculer la nouvelle taille de police en fonction du scroll
    let newFontSize = maxFontSize - (scrollPosition / maxScroll) * (maxFontSize - minFontSize);

    // Appliquer la nouvelle taille de police
    h1.style.fontSize = `${Math.max(minFontSize, newFontSize)}rem`;
});

// Fonction pour masquer le loader après 3 secondes
window.onload = function () {
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
    }, 3500); // 3500ms correspond à la durée de l'animation
};

