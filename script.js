const sections = document.querySelectorAll('.section');

function updateActiveSection() {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', updateActiveSection);