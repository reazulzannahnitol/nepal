document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    var openNavButton = document.getElementById('openMobileNav');
    var mobileNav = document.getElementById('mobileNav');
    var overlay = document.querySelector('.mobile-overlay');
    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');
    var navLinks = mobileNav.querySelectorAll('a'); // Select all links in the mobile nav

    // Function to close the mobile nav and hide overlay
    function closeMobileNav() {
        mobileNav.classList.remove('show');
        overlay.classList.remove('active');
        menuIcon.style.display = 'block'; // Show hamburger icon
        closeIcon.style.display = 'none'; // Hide close icon
    }

    // Open mobile nav and show overlay
    openNavButton.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
        overlay.classList.toggle('active');

        // Toggle icons
        if (mobileNav.classList.contains('show')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

    // Close mobile nav when clicking overlay
    overlay.addEventListener('click', closeMobileNav);

    // Close mobile nav when clicking any link
    navLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileNav);
    });
});







    // JavaScript to change the modal image source
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-bs-img-src');
            document.getElementById('modal-image').src = imgSrc;
        });
    });


    $('#imageModal').on('show.bs.modal', function (e) {
        e.preventDefault();
        $('html, body').scrollTop(0);
    });
    




    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) { // Adjust scroll threshold if needed
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    