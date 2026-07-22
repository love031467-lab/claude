// Nav panel toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navBackdrop = document.getElementById("navBackdrop");

function closeNav() {
  navLinks.classList.remove("open");
  navBackdrop.classList.remove("open");
}

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navBackdrop.classList.toggle("open");
});

navBackdrop.addEventListener("click", closeNav);

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form -> mailto
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;

  const subject = encodeURIComponent(`포트폴리오 문의 - ${name}`);
  const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n${message}`);

  window.location.href = `mailto:dnwndls3445@naver.com?subject=${subject}&body=${body}`;
});

// Project tabs
const projectTabs = document.querySelectorAll(".project-tab");
const projectPanels = document.querySelectorAll("[data-tab-panel]");

projectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    projectTabs.forEach((t) => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });

    projectPanels.forEach((panel) => {
      panel.hidden = panel.dataset.tabPanel !== target;
    });
  });
});

// Project carousel arrows
const prevProjectBtn = document.getElementById("prevProject");
const nextProjectBtn = document.getElementById("nextProject");

function scrollActivePanel(direction) {
  const panel = document.querySelector(".projects-grid:not([hidden])");
  const card = panel && panel.querySelector(".project-card");
  if (!panel || !card) return;

  const gap = parseFloat(getComputedStyle(panel).columnGap || 24);
  const amount = card.getBoundingClientRect().width + gap;
  panel.scrollBy({ left: direction * amount, behavior: "smooth" });
}

prevProjectBtn.addEventListener("click", () => scrollActivePanel(-1));
nextProjectBtn.addEventListener("click", () => scrollActivePanel(1));
