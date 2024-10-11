document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        if (link.href.includes(currentLocation)) {
            link.classList.add('active'); // Add active class
        }
    });
});