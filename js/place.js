const options = {
    rootMargin: "0px",
    threshold: 0.5,
};

const photos = document.querySelectorAll(".item img[data-src]");

const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src'); 
            img.removeAttribute('data-src'); 
            img.classList.add('photo1'); 
            observer.unobserve(img); 
        }
    });
};


const observer = new IntersectionObserver(intersectionCallback, options);


photos.forEach((photo) => {
    observer.observe(photo);
});
