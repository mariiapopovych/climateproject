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

AOS.init({
    duration: 1200, // Animation duration
});

// Add event listener for scroll
window.addEventListener('scroll', updateActiveSection);

// Function to scroll to the top
function scrollToTop() {
    const button = document.getElementById('scrollToTop');
    
    // Add the clicked class
    button.classList.add('clicked');

    // Scroll to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });

    // Remove the clicked class after a short delay
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 300); // Match the duration of the CSS transition
}

// Show or hide the button based on scroll position
window.onscroll = function() {
    const button = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Show button
    } else {
        button.style.display = "none"; // Hide button
    }
};