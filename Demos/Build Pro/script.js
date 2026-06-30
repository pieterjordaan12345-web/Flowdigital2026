// ======================================
// BUILDPRO CONSTRUCTION
// script.js
// ======================================


// Fade in sections when scrolling

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});




// Navigation shadow while scrolling

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        nav.style.background = "rgba(20,20,20,.98)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }else{

        nav.style.background = "rgba(25,25,25,.95)";
        nav.style.boxShadow = "0 3px 15px rgba(0,0,0,.25)";

    }

});




// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});




// Animated statistics

const stats = document.querySelectorAll(".stat-box h2");

let statsStarted = false;

function animateStats(){

    if(statsStarted) return;

    const statsSection = document.querySelector(".stats-grid");

    if(!statsSection) return;

    const position = statsSection.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){

        statsStarted = true;

        stats.forEach(stat=>{

            const text = stat.innerText;

            const number = parseInt(text);

            const suffix = text.replace(number,"");

            let count = 0;

            const speed = Math.max(15,2000/number);

            const timer = setInterval(()=>{

                count++;

                stat.innerText = count + suffix;

                if(count >= number){

                    stat.innerText = number + suffix;

                    clearInterval(timer);

                }

            },speed);

        });

    }

}

window.addEventListener("scroll",animateStats);

animateStats();




// Highlight active navigation link

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});




// Gallery hover lift

document.querySelectorAll(".gallery-item").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "translateY(0px)";

    });

});




// Simple page load animation

window.addEventListener("load",()=>{

    document.body.style.opacity = "1";

});




// Console branding

console.log("%cBuildPro Construction Demo Website","color:#ff9800;font-size:18px;font-weight:bold;");

console.log("Designed as a portfolio demonstration.");
