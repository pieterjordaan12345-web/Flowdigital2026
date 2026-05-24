/* =========================
   FLOW DIGITAL - V2 PREMIUM ANIMATIONS
   (Optimized + More Interactive)
========================= */

/* =========================
   1. SMOOTH PAGE INTRO
========================= */
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s ease";

    requestAnimationFrame(() => {
        document.body.style.opacity = "1";
    });

    const hero = document.querySelector(".hero-content");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(30px)";
        hero.style.transition = "1s cubic-bezier(0.2, 0.8, 0.2, 1)";

        setTimeout(() => {
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 250);
    }
});


/* =========================
   2. IMPROVED SCROLL REVEAL (ONCE ONLY + STAGGER)
========================= */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target); // prevents re-trigger spam
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .card, .contact-card, .service-card, .why-card")
.forEach((el, index) => {
    el.classList.add("hidden");

    // stagger effect
    el.style.transitionDelay = `${index * 0.05}s`;

    revealObserver.observe(el);
});


/* =========================
   3. MAGNETIC BUTTON SYSTEM (premium feel)
========================= */
document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) * 0.2;
        const moveY = (y - rect.height / 2) * 0.2;

        btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
        btn.style.transition = "0.1s ease";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0) scale(1)";
    });

    btn.addEventListener("click", (e) => {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.background = "rgba(255,255,255,0.6)";
        ripple.style.borderRadius = "50%";
        ripple.style.transform = "scale(0)";
        ripple.style.animation = "ripple 0.6s ease-out";
        ripple.style.pointerEvents = "none";

        btn.style.position = "relative";
        btn.style.overflow = "hidden";

        btn.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});


/* =========================
   4. 3D CARD TILT (VERY PREMIUM FEEL)
========================= */
document.querySelectorAll(".card, .service-card, .why-card")
.forEach(card => {

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-5px)
        `;

        card.style.transition = "0.1s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
        card.style.transition = "0.4s ease";
    });
});


/* =========================
   5. SMOOTH SCROLL (IMPROVED)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* =========================
   6. SCROLL PROGRESS BAR (SMOOTHER)
========================= */
const progressBar = document.createElement("div");

progressBar.style.cssText = `
position: fixed;
top: 0;
left: 0;
height: 3px;
width: 0%;
background: linear-gradient(90deg, #4da3ff, #7cc4ff);
z-index: 9999;
transition: width 0.1s ease;
`;

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        const scrolled = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrolled + "%";
    });
});


/* =========================
   7. SMART CURSOR (GLASS GLOW + SMOOTH FOLLOW)
========================= */
const cursor = document.createElement("div");

cursor.style.cssText = `
position: fixed;
width: 18px;
height: 18px;
background: rgba(77,163,255,0.35);
border-radius: 50%;
pointer-events: none;
z-index: 9999;
transform: translate(-50%, -50%);
backdrop-filter: blur(4px);
transition: transform 0.05s linear;
`;

document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);
}
animateCursor();


/* =========================
   8. PARALLAX LAYERS (SMOOTHER + MULTI DEPTH)
========================= */
window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
        const hero = document.querySelector(".hero");

        if (hero) {
            hero.style.transform = `translateY(${window.scrollY * 0.15}px)`;
        }
    });
});


/* =========================
   9. GLOBAL ANIMATION CSS
========================= */
const style = document.createElement("style");

style.innerHTML = `
.hidden {
    opacity: 0;
    transform: translateY(40px);
}

.show {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes ripple {
    to {
        transform: scale(6);
        opacity: 0;
    }
}
`;

document.head.appendChild(style);
