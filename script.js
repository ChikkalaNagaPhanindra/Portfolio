const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.classList.toggle("active");
});

const lists = document.querySelectorAll(".nav-menu a");
lists.forEach(list => {
    list.addEventListener("click", () => {
        menu.classList.remove("show");
        hamburger.classList.remove("active");
    })
});


const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
const skills = document.querySelector(".skillsContainer");

const cardWidth = () => {
    const card = document.querySelector(".card");
    return card.offsetWidth + 24;
};

/* RIGHT */
rightBtn.addEventListener("click", () => {
    skills.scrollBy({
        left: cardWidth(),
        behavior: "smooth"
    });
});

/* LEFT */
leftBtn.addEventListener("click", () => {
    skills.scrollBy({
        left: -cardWidth(),
        behavior: "smooth"
    });
});

/* AUTO SLIDE */
let autoslide = setInterval(slideSkills, 2500);

function slideSkills() {

    if (
        skills.scrollLeft + skills.clientWidth >=
        skills.scrollWidth - 10
    ) {
        skills.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    }
    else {
        skills.scrollBy({
            left: cardWidth(),
            behavior: "smooth"
        });
    }
}

/* STOP ON HOVER */
skills.addEventListener("mouseenter", () => {
    clearInterval(autoslide);
});

/* RESTART */
skills.addEventListener("mouseleave", () => {
    autoslide = setInterval(slideSkills, 2500);
});