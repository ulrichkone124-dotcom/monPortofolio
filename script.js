/* =========================================================
   PORTFOLIO - script.js (JavaScript vanilla)
   ========================================================= */

/* =========================================================
   TES COMPÉTENCES — modifie uniquement cette liste.
   ---------------------------------------------------------
   short   : 2-3 lettres affichées dans le petit badge coloré
   color   : couleur de fond du badge (code hexadécimal)
   text    : couleur du texte du badge (optionnel, "#111" par défaut sur fond clair)
   level   : pourcentage affiché et longueur de la barre (0 à 100)
   learning: mets "true" (sans guillemets) au lieu d'un "level" pour une
             compétence en cours d'apprentissage : la barre reste discrète
             et affiche "En apprentissage" au lieu d'un pourcentage.
   ========================================================= */
const SKILLS = [
  { name: "HTML",                  short: "H5",  color: "#E44D26",                  level: 65 },
  { name: "CSS",                   short: "C3",  color: "#2965F1",                  level: 35 },
  { name: "JavaScript",            short: "JS",  color: "#F7DF1E", text: "#111",    level: 20 },
  { name: "Kotlin",                short: "Kt",  color: "#7F52FF",                  level: 20 },
  { name: "SQL / BDD",             short: "Sql", color: "#00758F",                  level: 45 },
  { name: "Merise",                short: "Mr",  color: "#5352ED",                  level: 50 },
  { name: "PHP",                   short: "Php", color: "#777BB4",                  level: 30 },
  { name: "C",                     short: "C",   color: "#A8B9CC", text: "#111",    level: 20 },
  { name: "Bootstrap",             short: "Bs",  color: "#7952B3",                  level: 15 },
  { name: "Affiches (Canva)",      short: "Cv",  color: "#00C4CC", text: "#0A0E1A", level: 70 },
  { name: "UI/UX Design",          short: "Ux",  color: "#A259FF",                  level: 20 },
  { name: "IA (Vibe Coding)",      short: "Ai",  color: "#6C5CE7",                  level: 50 }
];

/* Construit la grille de compétences dans #skillsGrid à partir de SKILLS. */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = SKILLS.map(skill => {
    const level = skill.learning ? 35 : skill.level;               // longueur de la barre
    const rightLabel = skill.learning ? "En apprentissage" : level + "%";
    const textColor = skill.text ? `;color:${skill.text}` : "";

    return `
      <div class="skill${skill.learning ? " is-learning" : ""}" data-level="${level}">
        <div class="skill-top">
          <span class="tech sm" style="--c:${skill.color}${textColor}">${skill.short}</span>
          <span>${skill.name}</span>
          <em>${rightLabel}</em>
        </div>
        <div class="bar"><span></span></div>
      </div>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 0. Construction de la liste des compétences ---------- */
  renderSkills();

  /* ---------- 1. Année automatique dans le footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 2. Menu mobile ---------- */
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
    // Ferme le menu quand on clique sur un lien
    mobileMenu.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- 3. Bordure de la navbar au scroll ---------- */
  const navbar = document.getElementById("navbar");
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 4. Lien actif selon la section visible ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link =>
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(section => spy.observe(section));

  /* ---------- 5. Barres de compétences animées ---------- */
  const skills = document.querySelectorAll(".skill");

  const barObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.dataset.level;      // ex : 95
        entry.target.querySelector(".bar span").style.width = level + "%";
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  skills.forEach(skill => barObserver.observe(skill));

  /* ---------- 6. Compteurs des statistiques ---------- */
  const counters = document.querySelectorAll("[data-count]");

  const countObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(target * progress);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });

  counters.forEach(c => countObserver.observe(c));

  /* ---------- 7. Photo de profil : placeholder si l'image est absente ---------- */
  const photo = document.getElementById("profilePhoto");
  const placeholder = document.getElementById("photoPlaceholder");

  if (photo && placeholder) {
    const showPlaceholder = () => {
      photo.classList.add("hidden-img");
      placeholder.style.display = "flex";
    };
    const hidePlaceholder = () => {
      photo.classList.remove("hidden-img");
      placeholder.style.display = "none";
    };

    photo.addEventListener("error", showPlaceholder);
    photo.addEventListener("load", hidePlaceholder);
    // Cas où l'image a déjà échoué avant l'ajout des écouteurs
    if (photo.complete && photo.naturalWidth === 0) showPlaceholder();
  }

  /* ---------- 8. Projets & designs : retire le grisé quand une image existe ---------- */
  // Dès qu'une <img> est décommentée dans une carte, elle n'est plus "vide".
  document.querySelectorAll(".project.is-empty, .design.is-empty").forEach(card => {
    const img = card.querySelector("img");
    if (!img) return;
    const activate = () => {
      card.classList.remove("is-empty");
      const label = card.querySelector(".ph-label");
      if (label) label.remove();
    };
    img.addEventListener("load", activate);
    if (img.complete && img.naturalWidth > 0) activate();
  });

});
