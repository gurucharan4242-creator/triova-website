
console.log("Triova Website Loaded Successfully");
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ==========================
// Back To Top Button
// ==========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// ==========================
// Mobile Hamburger Menu
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}
// ==========================
// Premium Lightbox Gallery
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".project-grid img");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const closeBtn = document.querySelector(".close-lightbox");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    let currentIndex = 0;

    function showImage(index){

        currentIndex=index;

        lightbox.style.display="flex";

        lightboxImg.src=images[index].src;

        lightboxImg.alt=images[index].alt;

    }

    images.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            showImage(index);

        });

    });
if (nextBtn && prevBtn ){
    nextBtn.addEventListener("click",()=>{

        currentIndex=(currentIndex+1)%images.length;

        showImage(currentIndex);

    });

    prevBtn.addEventListener("click",()=>{

        currentIndex=(currentIndex-1+images.length)%images.length;

        showImage(currentIndex);

    });
} 
   if (closeBtn && lightbox) {
closeBtn.addEventListener("click",()=>{

        lightbox.style.display="none";

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.style.display="none";

        }

    });
}

    document.addEventListener("keydown",(e)=>{

        if(lightbox.style.display==="flex"){

            if(e.key==="ArrowRight"){

                nextBtn.click();

            }

            if(e.key==="ArrowLeft"){

                prevBtn.click();

            }

            if(e.key==="Escape"){

                lightbox.style.display="none";

            }

        }

    });

    let startX=0;
if (lightbox && nextBtn && prevBtn) {
    lightbox.addEventListener("touchstart",(e)=>{

        startX=e.changedTouches[0].screenX;

    });

    lightbox.addEventListener("touchend",(e)=>{

        let endX=e.changedTouches[0].screenX;

        let diff=startX-endX;

        if(diff>50){

            nextBtn.click();

        }

        if(diff<-50){

            prevBtn.click();

        }

    });
}
});
// ===============================
// PORTFOLIO FILTER
// ===============================

const filterButtons = document.querySelectorAll(".portfolio-filter button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
/* Scroll Reveal */
function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            section.classList.add("active");
        }

    });

}
window.addEventListener("scroll", revealSections);
revealSections();
window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    // Keep the preloader visible for 1.75seconds
    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1750);

});
const counters = document.querySelectorAll(".trust-item h2");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            counters.forEach(counter => {

                const text = counter.innerText;

                const target = parseInt(text);

                if (isNaN(target)) return;

                let count = 0;

                const speed = target / 60;

                const update = () => {

                    if (count < target) {

                        count += speed;

                        if (text.includes("%")) {
                            counter.innerText = Math.floor(count) + "%";
                        }
                        else {
                            counter.innerText = Math.floor(count) + "+";
                        }

                        requestAnimationFrame(update);

                    } else {

                        counter.innerText = text;

                    }

                };

                update();

            });

            observer.disconnect();

        }
    });
});
observer.observe(document.querySelector(".trust-bar"));
const trustbar = document.querySelector(".trust-bar");
if (trustbar) {
    observer.observe(trustbar);
}
console.log("script loaded");
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Change navbar background after scrolling
    if (currentScroll > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Hide while scrolling down, show while scrolling up
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }

    lastScroll = currentScroll;
});