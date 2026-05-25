/* =========================================
                app.js
========================================= */

/* NAVBAR EFFECT */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 0 20px rgba(255,43,43,0.15)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

/* =========================================
        SCROLL ANIMATION
========================================= */

const cards = document.querySelectorAll(
    ".feature-card, .project-card, .stat-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach((card) => {

    observer.observe(card);

});

/* =========================================
        TYPING EFFECT
========================================= */

const heroTitle = document.querySelector(".hero-content h1");

if(heroTitle){

    const text = heroTitle.innerText;

    heroTitle.innerText = "";

    let index = 0;

    function typeEffect(){

        if(index < text.length){

            heroTitle.innerText += text.charAt(index);

            index++;

            setTimeout(typeEffect, 70);

        }

    }

    typeEffect();

}

/* =========================================
        COUNTER EFFECT
========================================= */

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach((counter) => {

    const updateCounter = () => {

        const target = +counter.innerText.replace("+", "");

        const count = +counter.innerText.replace("+", "");

        let start = 0;

        const increment = target / 100;

        function animate(){

            start += increment;

            if(start < target){

                counter.innerText = `${Math.floor(start)}+`;

                requestAnimationFrame(animate);

            } else {

                counter.innerText = `${target}+`;

            }

        }

        animate();

    };

    updateCounter();

});

/* =========================================
        ACTIVE NAV LINK
========================================= */

const currentLocation = location.href;

const menuItem = document.querySelectorAll(".nav-links a");

menuItem.forEach((item) => {

    if(item.href === currentLocation){

        item.classList.add("active");

    }

});

/* =========================================
        FADE IN PAGE LOAD
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* =========================================
        SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* =========================================
        BUTTON HOVER SOUND
========================================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

/* =========================================
        DYNAMIC FOOTER YEAR
========================================= */

const footerText = document.querySelector("footer p");

if(footerText){

    const year = new Date().getFullYear();

    footerText.innerHTML =
    `© ${year} ForgeCommunity — Tecnología, innovación y desarrollo profesional.`;

}