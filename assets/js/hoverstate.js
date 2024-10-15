document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        if (link.href.includes(currentLocation)) {
            link.classList.add('active'); // Add active class
        }
    });
});

$(document).ready(function() {
    $('#toggleSideMenu').click(function() {
        $('#sideMenu').toggleClass('open');
        $('#overlay').toggle(); // Show overlay when side menu opens
    });

    $('.close-menu, #overlay').click(function() {
        $('#sideMenu').removeClass('open');
        $('#overlay').hide(); // Hide overlay when closing the menu
    });

    $(window).resize(function() {
        if ($(window).width() > 991) {
            $('#sideMenu').removeClass('open');
            $('#overlay').hide(); // Hide overlay on larger screens
        }
    });
});