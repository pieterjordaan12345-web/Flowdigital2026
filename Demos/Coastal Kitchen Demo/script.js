/* =========================
   COASTAL KITCHEN SCRIPT
========================= */


/* Smooth scrolling for navigation links */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});





/* =========================
   SCROLL ANIMATION
========================= */


const sections = document.querySelectorAll(
    ".section, .card, .content-box, .gallery-item"
);



const observer = new IntersectionObserver(

(entries) => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";


        }


    });


},

{

    threshold: 0.15

}

);





sections.forEach(section => {


    section.style.opacity = "0";


    section.style.transform = "translateY(40px)";


    section.style.transition = "all 0.8s ease";


    observer.observe(section);


});







/* =========================
   NAVIGATION BACKGROUND
========================= */


window.addEventListener("scroll", () => {


    const nav = document.querySelector("nav");


    if(window.scrollY > 50){


        nav.style.background =
        "rgba(15,30,40,0.98)";


    }

    else {


        nav.style.background =
        "rgba(15,30,40,0.9)";


    }


});







/* =========================
   BUTTON HOVER EFFECT
========================= */


const buttons = document.querySelectorAll(".btn");



buttons.forEach(button => {


    button.addEventListener("mouseenter", () => {


        button.style.transform =
        "translateY(-5px)";


    });



    button.addEventListener("mouseleave", () => {


        button.style.transform =
        "translateY(0)";


    });


});







/* =========================
   CURRENT YEAR FOOTER
========================= */


const footerText = document.querySelector("footer p");


if(footerText){


    const year = new Date().getFullYear();


    footerText.innerHTML =
    `© ${year} Coastal Kitchen. All rights reserved.`;


}