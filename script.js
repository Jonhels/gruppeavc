/* Intersection observer for scene 4 */
const suns = document.querySelectorAll(".sun");
const grasses = document.querySelectorAll(".grass");

const options = {
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        console.log(entry.target);
        entry.target.classList.toggle("sun--brighter");
    });
}, options);

const observer2 = new IntersectionObserver(function (entries, observer2) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        console.log(entry.target);
        entry.target.classList.toggle("grass--brighter");
    });
}, options);

suns.forEach((sun) => {
    observer.observe(sun);
});

grasses.forEach((grass) => {
    observer2.observe(grass);
});
/* End intersection observer for scene 4 */