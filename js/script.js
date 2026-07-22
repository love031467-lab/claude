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

// Project carousels: touch swipe works natively; add mouse drag-to-swipe for desktop.
// Uses Pointer Events gated to pointerType "mouse" only, so touch swipes are always
// left to the browser's native scrolling and never fought over by this drag logic.
document.querySelectorAll(".projects-grid").forEach((panel) => {
  let isDown = false;
  let moved = false;
  let startX = 0;
  let scrollStart = 0;

  panel.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    isDown = true;
    moved = false;
    panel.classList.add("dragging");
    startX = e.clientX;
    scrollStart = panel.scrollLeft;
  });

  window.addEventListener("pointerup", () => {
    isDown = false;
    panel.classList.remove("dragging");
  });

  panel.addEventListener("pointerleave", () => {
    isDown = false;
    panel.classList.remove("dragging");
  });

  panel.addEventListener("pointermove", (e) => {
    if (!isDown || e.pointerType !== "mouse") return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) moved = true;
    panel.scrollLeft = scrollStart - dx;
  });

  panel.addEventListener(
    "click",
    (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    true
  );
});

// Project image modal
const projectModal = document.getElementById("projectModal");
const projectModalBackdrop = document.getElementById("projectModalBackdrop");
const projectModalClose = document.getElementById("projectModalClose");
const projectModalContent = document.getElementById("projectModalContent");

function openProjectModal(thumb) {
  projectModalContent.innerHTML = "";

  const modalImageSrc = thumb.dataset.modalImage;
  if (modalImageSrc) {
    const img = document.createElement("img");
    img.src = modalImageSrc;
    img.alt = thumb.querySelector("img")?.alt || "";
    projectModalContent.appendChild(img);
  } else {
    projectModalContent.appendChild(thumb.cloneNode(true));
  }

  projectModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => openProjectModal(thumb));
});

projectModalBackdrop.addEventListener("click", closeProjectModal);
projectModalClose.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !projectModal.hidden) closeProjectModal();
});
