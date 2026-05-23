
/* =========================
   FLOW DIGITAL - WEBSITE ANIMATIONS
========================= */

/* 1. SMOOTH PAGE LOADING ANIMATION */
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s ease";
    
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});


/* 2. SCROLL REVEAL ANIMATION */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(".section, .card, .contact-card, .service-card, .why-card");

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


/* 3. BUTTON CLICK ANIMATION */
const buttons = document.querySelectorAll("a, .btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});


/* 4. HOVER FLOAT EFFECT (CARDS) */
const cards = document.querySelectorAll(".card, .contact-card, .service-card, .why-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });
});


/* 5. SMOOTH SCROLL FOR INTERNAL LINKS */
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
   ANIMATION CSS INJECTION (IMPORTANT)
   (So JS actually works visually)
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
`;

document.head.appendChild(style);