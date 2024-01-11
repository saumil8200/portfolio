const cursor = document.querySelector('.cursor');
const colors = [
  '#D8E9A8',
  '#1E5128',
  '#F7FEE7',
  '#F0F0F0',
  '#333333'
];

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';

  const colorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[colorIndex];
  cursor.style.backgroundColor = randomColor;
});

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
