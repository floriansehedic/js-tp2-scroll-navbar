// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let scrollLvl = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY < scrollLvl) {
        navbar.style.top = 0;
    } else {
        navbar.style.top = "-60px";
    }
    scrollLvl =window.scrollY;
});