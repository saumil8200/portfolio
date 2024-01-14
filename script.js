document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul a");

    window.addEventListener("scroll", function() {
        for (const section of document.querySelectorAll("section")) {
            const top = section.offsetTop - 100;

            if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
                navLinks.forEach(link => link.classList.remove("active-link"));

                const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add("active-link");
                }
            }
        }
    });
});
