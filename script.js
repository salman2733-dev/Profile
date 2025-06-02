// Create animated background bubbles
function createBubbles() {
  const bg = document.getElementById("animatedBg");
  const numBubbles = 20;

  for (let i = 0; i < numBubbles; i++) {
    const size = Math.random() * 100 + 50;
    const bubble = document.createElement("div");
    bubble.classList.add("animated-bubble");

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;

    bg.appendChild(bubble);
  }
}

// Animate skill progress bars
function animateSkills() {
  const skillProgress = document.querySelectorAll(".skill-progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const level = entry.target.getAttribute("data-level");
          entry.target.style.width = `${level}%`;
        }
      });
    },
    { threshold: 0.1 }
  );

  skillProgress.forEach((progress) => {
    observer.observe(progress);
  });
}

// Reveal elements on scroll
function revealOnScroll() {
  const items = document.querySelectorAll(
    ".portfolio-item, .skill-card, .contact-form"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach((item) => {
    observer.observe(item);
  });
}

// Theme toggle
function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      themeToggle.textContent = "Dark-Theme";
    } else {
      themeToggle.textContent = "Light-Theme";
    }
  });
}

// Navbar scroll effect
function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking on links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Smooth scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar
        behavior: "smooth",
      });
    });
  });
}

// Active link highlighting
function setupActiveLinkHighlighting() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = "#" + section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      } else if (current === "" && link.getAttribute("href") === "#") {
        link.classList.add("active");
      }
    });
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  createBubbles();
  animateSkills();
  revealOnScroll();
  setupThemeToggle();
  setupNavbarScroll();
  setupMobileMenu();
  setupSmoothScrolling();
  setupActiveLinkHighlighting();
});
// script.js me add karo
const items = document.querySelectorAll(".portfolio-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

items.forEach((item) => {
  observer.observe(item);
});
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

function sendToWhatsApp(event) {
  event.preventDefault(); // Form ko submit hone se roko

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const phoneNumber = "923257848624"; // <-- apna WhatsApp number daalo yahan (without +)
  const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(whatsappURL, "_blank"); // WhatsApp open hoga new tab mein
}
