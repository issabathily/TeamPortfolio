// Données du carrousel
const slides = [
  {
    id: 1,
    title: "Des solutions digitales innovantes",
    subtitle: "Notre équipe de développeurs talentueux transforme vos idées en réalité.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 2,
    title: "Expertise en développement web",
    subtitle: "Des applications web modernes et performantes pour votre entreprise.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 3,
    title: "Formation professionnelle",
    subtitle: "Découvrez nos programmes de formation pour les développeurs web.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }
];

// Données des projets
const projects = [
  {
    id: 1,
    title: "E-commerce Multivendeur",
    description: "Plateforme complète permettant à plusieurs vendeurs de gérer leurs boutiques avec un système de paiement intégré et un tableau de bord administratif.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    url: "#",
    technologies: ["React", "Angular", "MongoDB", "Agile"]
  },
  {
    id: 2,
    title: "Application de Gestion RH",
    description: "Système complet de gestion des ressources humaines avec suivi des congés, évaluations, fiches de paie et recrutement intégré.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    url: "#",
    technologies: ["React", "Express", "PostgreSQL", "Django"]
  },
  {
    id: 3,
    title: "Plateforme de Formation en Ligne",
    description: "Solution d'apprentissage en ligne avec modules vidéo, quiz interactifs et certificats de complétion pour les apprenants.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    url: "#",
    technologies: ["React", "TypeScript", "PostgreSQL"]
  }
];

// Données de l'équipe
const teamMembers = [
  {
    id: 1,
    name: "Issa Bathily",
    role: " Devellopeur Full-Stack",
    bio: "1mois  d'expérience dans la gestion de projets digitaux. Expert en méthodologies agiles et en développement de produits.",
    image: "assets/images/issa.jpg",
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "https://github.com/issabathily" }
    ]
  },
  {
    id: 2,
    name: "Moussa Corea",
    role: "Développeuse Front-End",
    bio: "Experte en React et Vue.js avec 8 ans d'expérience. Passionnée par l'UX/UI et le développement d'interfaces modernes.",
    image:"assets/images/Moussa.jpg",
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "#" }
    ]
  },
  {
    id: 3,
    name: "Alpha Oumar Ba ",
    role: "Développeur Back-End",
    bio: "Spécialiste en architecture de systèmes et bases de données. 10 ans d'expérience en développement de serveurs et APIs.",
    image: "assets/images/Apha.jpg",
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "#" }
    ]
  },
  {
    id: 4,
    name: "Adama Ba ",
    role: "Designer UX/UI",
    bio: "Designer créative spécialisée dans l'expérience utilisateur et les interfaces mobiles. Certifiée en accessibilité web.",
    image: "assets/images/Adama.jpg",
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Dribbble", url: "#" }
    ]
  },

  {
    id: 1,
    name: "Mariama cisse",
    role: "Chef de Projet",
    bio: "1mois  d'expérience dans la gestion de projets digitaux. Expert en méthodologies agiles et en développement de produits.",
    image: "assets/images/Mariama.jpg",
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "GitHub", url: "https://github.com/issabathily" }
    ]
  },
];

// Informations de contact
const contactInfo = {
  address: "123 Avenue de la Technologie, Diamniadio",
  email: "contact@devteam.fr",
  phone: "+221 77 388 04 36",
  socialLinks: [
    { platform: "LinkedIn", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "GitHub", url: "#" }
  ]
};

// Fonction du carrousel
let currentSlide = 0;
const sliderInterval = 5000; // 5 secondes

function initSlider() {
  const sliderContainer = document.querySelector('.slider-container');
  if (!sliderContainer) return;
  
  // Créer les slides
  slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
    slideElement.innerHTML = `
      <img src="${slide.image}" alt="${slide.title}" class="slide-img">
      <div class="slide-content">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl text-white">
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">
              ${slide.title}
            </h1>
            <p class="text-xl mb-8">
              ${slide.subtitle}
            </p>
            <a href="contact.html" class="btn btn-primary">
              Discuter de votre projet
            </a>
          </div>
        </div>
      </div>
    `;
    sliderContainer.appendChild(slideElement);
  });
  
  // Créer les indicateurs
  const indicators = document.createElement('div');
  indicators.className = 'slide-indicators';
  
  slides.forEach((_, index) => {
    const indicator = document.createElement('button');
    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
    indicator.setAttribute('aria-label', `Aller au slide ${index + 1}`);
    indicator.addEventListener('click', () => goToSlide(index));
    indicators.appendChild(indicator);
  });
  
  sliderContainer.appendChild(indicators);
  
  // Démarrer l'intervalle
  setInterval(nextSlide, sliderInterval);
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  
  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');
  
  currentSlide = index;
  
  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  goToSlide((currentSlide + 1) % slides.length);
}

// Fonction pour la barre de navigation mobile
function initMobileNav() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  
  if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
    
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }
}

// Affichage des projets
function renderProjects() {
  const projectsContainer = document.getElementById('projects-container');
  if (!projectsContainer) return;
  
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'card group';
    
    let techTags = '';
    project.technologies.forEach(tech => {
      techTags += `<span class="tech-tag">${tech}</span>`;
    });
    
    projectElement.innerHTML = `
      <div class="card-img-container">
        <img src="${project.image}" alt="${project.title}" class="card-img">
      </div>
      <div class="p-6">
        <h3 class="font-heading font-semibold text-xl mb-2">${project.title}</h3>
        <p class="text-muted mb-4">
          ${project.description}
        </p>
        <div class="flex flex-wrap mb-4">
          ${techTags}
        </div>
        <a href="${project.url}" class="text-primary font-medium flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
          Voir le projet
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    `;
    
    projectsContainer.appendChild(projectElement);
  });
}

// Affichage des membres de l'équipe
function renderTeamMembers() {
  const teamContainer = document.getElementById('team-container');
  if (!teamContainer) return;
  
  teamMembers.forEach(member => {
    const memberElement = document.createElement('div');
    memberElement.className = 'team-card group';
    
    let socialIcons = '';
    member.socialLinks.forEach(social => {
      let icon = '';
      
      if (social.platform === 'LinkedIn') {
        icon = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>';
      } else if (social.platform === 'Twitter') {
        icon = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>';
      } else if (social.platform === 'GitHub') {
        icon = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
      } else if (social.platform === 'Dribbble') {
        icon = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.628 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/></svg>';
      }
      
      socialIcons += `
        <a href="${social.url}" class="social-icon" target="_blank" rel="noopener noreferrer" aria-label="${social.platform}">
          ${icon}
        </a>
      `;
    });
    
    memberElement.innerHTML = `
      <div class="team-img-container">
        <img src="${member.image}" alt="${member.name}" class="team-img">
      </div>
      <div class="p-6">
        <h3 class="font-heading font-semibold text-xl mb-1">${member.name}</h3>
        <p class="text-secondary mb-3">${member.role}</p>
        <p class="text-muted text-sm mb-4">
          ${member.bio}
        </p>
        <div class="flex justify-center space-x-3">
          ${socialIcons}
        </div>
      </div>
    `;
    
    teamContainer.appendChild(memberElement);
  });
}

// Validation et soumission du formulaire de contact
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validation simple
    if (!name || !email || !subject || !message) {
      showToast('Erreur', 'Veuillez remplir tous les champs', 'error');
      return;
    }
    
    if (!validateEmail(email)) {
      showToast('Erreur', 'Veuillez entrer une adresse email valide', 'error');
      return;
    }
    
    // Simuler l'envoi (normalement, on enverrait à un serveur)
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Envoi en cours...';
    
    setTimeout(() => {
      showToast('Message envoyé', 'Votre message a été envoyé avec succès. Nous vous répondrons dès que possible.', 'success');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 1500);
  });
}

// Validateur d'email simple
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Toast pour les notifications
function showToast(title, message, type = 'info') {
  // Créer l'élément toast s'il n'existe pas
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed top-4 right-4 z-50';
    document.body.appendChild(toastContainer);
  }
  
  const toast = document.createElement('div');
  toast.className = `bg-white rounded-lg shadow-lg p-4 mb-3 flex items-start max-w-sm transform transition-all duration-300 translate-x-full opacity-0`;
  
  let bgColor = 'bg-blue-100';
  let textColor = 'text-blue-700';
  
  if (type === 'success') {
    bgColor = 'bg-green-100';
    textColor = 'text-green-700';
  } else if (type === 'error') {
    bgColor = 'bg-red-100';
    textColor = 'text-red-700';
  }
  
  toast.innerHTML = `
    <div class="${bgColor} rounded-full p-2 mr-3 shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ${textColor}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        ${type === 'success' 
          ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>'
          : type === 'error'
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
            : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
        }
      </svg>
    </div>
    <div>
      <h3 class="font-medium">${title}</h3>
      <p class="text-sm text-gray-600">${message}</p>
    </div>
  `;
  
  toastContainer.appendChild(toast);
  
  // Animation d'entrée
  setTimeout(() => {
    toast.classList.remove('translate-x-full', 'opacity-0');
  }, 10);
  
  // Supprimer après 5 secondes
  setTimeout(() => {
    toast.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser la navigation mobile
  initMobileNav();
  
  // Initialiser le carrousel sur la page d'accueil
  initSlider();
  
  // Initialiser les projets sur la page projets
  renderProjects();
  
  // Initialiser les membres de l'équipe sur la page équipe
  renderTeamMembers();
  
  // Initialiser le formulaire de contact
  initContactForm();
});