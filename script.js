const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");
const skills = document.querySelector(".skillsContainer");

rightBtn.addEventListener("click", () => {
    skills.scrollBy({
        left: 300,
        behavior: "smooth"
    })
})
leftBtn.addEventListener("click", () => {
    skills.scrollBy({
        left: -300,
        behavior: "smooth"
    })
})

let autoslide = setInterval(() => {
                    if (skills.scrollLeft + skills.clientWidth >= skills.scrollWidth) {
                        skills.scrollTo({
                            left: 0,
                            behavior: "smooth"
                        });
                    }
                    else {
                        skills.scrollBy({
                            left: 300,
                            behavior: "smooth"
                        });
                    }
                }, 2000);

skills.addEventListener("mouseleave", () => {
    autoslide = setInterval(() => {
        if (skills.scrollLeft + skills.clientWidth >= skills.scrollWidth - 100) {
            skills.scrollTo({
                left: 0,
                behavior: "smooth"
            });
        }
        else {
            skills.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        }
    }, 2000);
})

skills.addEventListener("mouseenter", () => {
    clearInterval(autoslide);
})