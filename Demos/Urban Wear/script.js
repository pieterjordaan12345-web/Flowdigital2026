// ========================================
// URBAN WEAR CO.
// SCRIPT.JS
// ========================================


// Smooth scrolling navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(e){


        e.preventDefault();


        const section = document.querySelector(
            this.getAttribute("href")
        );


        if(section){


            section.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});




// Navbar scroll effect

const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        nav.style.background = "rgba(0,0,0,0.98)";

        nav.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";


    }else{


        nav.style.background =
        "rgba(0,0,0,.9)";


        nav.style.boxShadow = "none";


    }


});





// Scroll reveal animation


const revealElements =
document.querySelectorAll(
".section, .product-card, .feature-box, .contact-card"
);



const observer =
new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("visible");


        }


    });


},{

    threshold:0.15

});



revealElements.forEach(element=>{


    element.classList.add("hidden");


    observer.observe(element);


});







// Product hover interaction


const products =
document.querySelectorAll(".product-card");



products.forEach(product=>{


    product.addEventListener(
        "mouseenter",
        ()=>{


            product.style.transform =
            "translateY(-12px) scale(1.02)";


        }
    );



    product.addEventListener(
        "mouseleave",
        ()=>{


            product.style.transform =
            "translateY(0) scale(1)";


        }
    );


});






// Newsletter button


const subscribeButton =
document.querySelector(".newsletter .btn");



if(subscribeButton){


    subscribeButton.addEventListener(
        "click",
        ()=>{


            alert(
            "Thanks for joining the Urban Wear community!"
            );


        }


    );


}






// Page loading animation


window.addEventListener(
"load",
()=>{


    document.body.style.opacity="1";


});






// Console message


console.log(
"%cUrban Wear Co. Ecommerce Demo",
"font-size:18px;font-weight:bold;color:#ffffff;"
);


console.log(
"Modern streetwear website concept loaded."
);