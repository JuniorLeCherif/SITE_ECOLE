<<<<<<< HEAD

//FONCTION POUR LES MENUS

var accueil = document.getElementById("accueil");
var formation = document.getElementById("formation");
var contact = document.getElementById("contact");
var galeries = document.getElementById("galeries");

var menuItems = [accueil, formation, contact,galeries];

// Fonction pour gérer le style actif
function setActive(clickedItem) {
    menuItems.forEach(item => {
        if (item === clickedItem) {
            item.classList.add("addColorTextOrange");
            item.classList.remove("removeColorTextOrange");
            // item.classList.add("active-underline");
        } else {
            item.classList.remove("addColorTextOrange");
            item.classList.add("removeColorTextOrange");
            // item.classList.remove("active-underline");
        }
    });
}

// Initialisation basée sur l'attribut data-page du body
function initializeActiveState() {
    var currentPage = document.body.getAttribute('data-page') || 'accueil';
    
    switch(currentPage) {
        case 'accueil':
            setActive(accueil);
            break;
        case 'formation':
            setActive(formation);
            break;
        case 'contact':
            setActive(contact);
            break;
        case 'galeries':
            setActive(galeries);
            break;
        default:
            setActive(accueil);
    }
}

// Initialisation au chargement
initializeActiveState();

// Event listeners pour les clics
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        setActive(item);
    });
});


//FONCTION POUT LA FLECHE

function createScrollToTopButtonSafe() {
    // Supprimer les boutons existants
    const existingButtons = document.querySelectorAll('[data-scroll-top="true"]');
    existingButtons.forEach(btn => btn.remove());
    
    // Créer le nouveau bouton
    const button = document.createElement('button');
    button.setAttribute('data-scroll-top', 'true');
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Retour en haut');
    button.innerHTML = '↑';
    
    // Ajouter au DOM
    document.body.appendChild(button);
    
    // Gérer l'affichage/masquage
    let isVisible = false;
    
    function toggleButton() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition > 300 && !isVisible) {
            button.classList.add('show');
            isVisible = true;
        } else if (scrollPosition <= 300 && isVisible) {
            button.classList.remove('show');
            isVisible = false;
        }
    }
    
    // Events
    window.addEventListener('scroll', toggleButton, { passive: true });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // État initial (caché)
    button.classList.remove('show');
    isVisible = false;
}

// Au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    createScrollToTopButtonSafe();
});


//INITIALISATION DE LA LIBRAIRIE AOS(Animate On Scroll)

function animateOnScrool() {
    AOS.init({
        duration: 1000, // durée en ms
        once: true      // animation seulement une fois
    });
}   

animateOnScrool()

function sendWhatsappMessage(numero,message) {
    var numeroTelephone = numero.replace(/\D/g, '')
    var encoderMessage = encodeURIComponent(message)
    var urlWhatsapp = `https://wa.me/${numeroTelephone}?text=${encoderMessage}`

    const estMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if(estMobile) {
      window.location.href = urlWhatsapp
    }else {
        window.open(urlWhatsapp , "_blank")
    }
}

function check_fields(idChamp,zonneMessage,message) {
    var champ = document.getElementById(idChamp).value.trim();
    var zonne = document.getElementById(zonneMessage)

    if(champ ==="" || champ === null) {
        zonne.innerText = message;
        zonne.style.color = "red"
        zonne.style.fontSize = "15px"
        zonne.style.fontWeight="bold"
        return false;
    }else {
      zonne.innerText = "";
      return true;
    }
    
}

function telechargerFichier(url, nomFichier) {
    const lien = document.createElement("a");
    lien.href = url;
    lien.download = nomFichier;
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
}


//FONCTION POUR COMPTER LES ELEMENTS

function CompteElemts(id, max, duration) {
  const element = document.getElementById(id);
  if (!element) return; // sécurité

  // Création de l'observer pour détecter la visibilité
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let start = 0;
        let increment = Math.ceil(max / (duration / 16)); // ~60fps

        let interval = setInterval(() => {
          start += increment;
          if (start >= max) {
            start = max;
            clearInterval(interval);
          }
          element.textContent = start.toLocaleString();
        }, 16);

        obs.unobserve(element); // ne se joue qu’une seule fois
      }
    });
  }, { threshold: 0.5 }); // déclenche quand 50% de l'élément est visible

  observer.observe(element);
}


=======

//FONCTION POUR LES MENUS

var accueil = document.getElementById("accueil");
var formation = document.getElementById("formation");
var contact = document.getElementById("contact");
var galeries = document.getElementById("galeries");

var menuItems = [accueil, formation, contact,galeries];

// Fonction pour gérer le style actif
function setActive(clickedItem) {
    menuItems.forEach(item => {
        if (item === clickedItem) {
            item.classList.add("addColorTextOrange");
            item.classList.remove("removeColorTextOrange");
            // item.classList.add("active-underline");
        } else {
            item.classList.remove("addColorTextOrange");
            item.classList.add("removeColorTextOrange");
            // item.classList.remove("active-underline");
        }
    });
}

// Initialisation basée sur l'attribut data-page du body
function initializeActiveState() {
    var currentPage = document.body.getAttribute('data-page') || 'accueil';
    
    switch(currentPage) {
        case 'accueil':
            setActive(accueil);
            break;
        case 'formation':
            setActive(formation);
            break;
        case 'contact':
            setActive(contact);
            break;
        case 'galeries':
            setActive(galeries);
            break;
        default:
            setActive(accueil);
    }
}

// Initialisation au chargement
initializeActiveState();

// Event listeners pour les clics
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        setActive(item);
    });
});


//FONCTION POUT LA FLECHE

function createScrollToTopButtonSafe() {
    // Supprimer les boutons existants
    const existingButtons = document.querySelectorAll('[data-scroll-top="true"]');
    existingButtons.forEach(btn => btn.remove());
    
    // Créer le nouveau bouton
    const button = document.createElement('button');
    button.setAttribute('data-scroll-top', 'true');
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Retour en haut');
    button.innerHTML = '↑';
    
    // Ajouter au DOM
    document.body.appendChild(button);
    
    // Gérer l'affichage/masquage
    let isVisible = false;
    
    function toggleButton() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollPosition > 300 && !isVisible) {
            button.classList.add('show');
            isVisible = true;
        } else if (scrollPosition <= 300 && isVisible) {
            button.classList.remove('show');
            isVisible = false;
        }
    }
    
    // Events
    window.addEventListener('scroll', toggleButton, { passive: true });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // État initial (caché)
    button.classList.remove('show');
    isVisible = false;
}

// Au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    createScrollToTopButtonSafe();
});


//INITIALISATION DE LA LIBRAIRIE AOS(Animate On Scroll)

function animateOnScrool() {
    AOS.init({
        duration: 1000, // durée en ms
        once: true      // animation seulement une fois
    });
}   

animateOnScrool()

function sendWhatsappMessage(numero,message) {
    var numeroTelephone = numero.replace(/\D/g, '')
    var encoderMessage = encodeURIComponent(message)
    var urlWhatsapp = `https://wa.me/${numeroTelephone}?text=${encoderMessage}`

    const estMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if(estMobile) {
      window.location.href = urlWhatsapp
    }else {
        window.open(urlWhatsapp , "_blank")
    }
}

function check_fields(idChamp,zonneMessage,message) {
    var champ = document.getElementById(idChamp).value.trim();
    var zonne = document.getElementById(zonneMessage)

    if(champ ==="" || champ === null) {
        zonne.innerText = message;
        zonne.style.color = "red"
        zonne.style.fontSize = "15px"
        zonne.style.fontWeight="bold"
        return false;
    }else {
      zonne.innerText = "";
      return true;
    }
    
}

function telechargerFichier(url, nomFichier) {
    const lien = document.createElement("a");
    lien.href = url;
    lien.download = nomFichier;
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
}


//FONCTION POUR COMPTER LES ELEMENTS

function CompteElemts(id, max, duration) {
  const element = document.getElementById(id);
  if (!element) return; // sécurité

  // Création de l'observer pour détecter la visibilité
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let start = 0;
        let increment = Math.ceil(max / (duration / 16)); // ~60fps

        let interval = setInterval(() => {
          start += increment;
          if (start >= max) {
            start = max;
            clearInterval(interval);
          }
          element.textContent = start.toLocaleString();
        }, 16);

        obs.unobserve(element); // ne se joue qu’une seule fois
      }
    });
  }, { threshold: 0.5 }); // déclenche quand 50% de l'élément est visible

  observer.observe(element);
}


>>>>>>> 16d1db31d597dd2691f9205fc2987380e84c9b87
