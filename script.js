/* =========================
   FLOW DIGITAL - PREMIUM WEBSITE ANIMATIONS
========================= */

/* =========================
   1. PAGE LOAD FADE IN
========================= */
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

    // Hero animation
    const heroText = document.querySelector(".hero-content");
    if (heroText) {
        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(20px)";
        heroText.style.transition = "1s ease";

        setTimeout(() => {
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }, 200);
    }
});


/* =========================
   2. SCROLL REVEAL SYSTEM
========================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    ".section, .card, .contact-card, .service-card, .why-card"
);

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


/* =========================
   3. SMOOTH BUTTON CLICK EFFECT
========================= */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);

        /* Ripple effect */
        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "100px";
        ripple.style.height = "100px";
        ripple.style.background = "rgba(255,255,255,0.4)";
        ripple.style.borderRadius = "50%";
        ripple.style.transform = "scale(0)";
        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";
        ripple.style.animation = "ripple 0.6s linear";
        ripple.style.pointerEvents = "none";

        btn.style.position = "relative";
        btn.style.overflow = "hidden";

        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});


/* =========================
   4. CARD HOVER EFFECT
========================= */
document.querySelectorAll(".card, .contact-card, .service-card, .why-card")
.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });
});


/* =========================
   5. SMOOTH SCROLL LINKS
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/* =========================
   6. SCROLL PROGRESS BAR
========================= */
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "3px";
progressBar.style.width = "0%";
progressBar.style.background = "#4da3ff";
progressBar.style.zIndex = "9999";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrolled + "%";
});


/* =========================
   7. CURSOR GLOW EFFECT
========================= */
const cursorGlow = document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "20px";
cursorGlow.style.height = "20px";
cursorGlow.style.background = "rgba(77,163,255,0.5)";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.zIndex = "9999";
cursorGlow.style.transform = "translate(-50%, -50%)";
cursorGlow.style.transition = "0.05s";

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});


/* =========================
   8. PARALLAX HERO EFFECT
========================= */
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    }
});


/* =========================
   9. ANIMATION CSS INJECTION
========================= */
const style = document.createElement("style");

style.innerHTML = `
.hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.show {
    opacity: 1;
    transform: translateY(0px);
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

document.head.appendChild(style);
