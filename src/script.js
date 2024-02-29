let bars = document.querySelector(".bars");
let menu = document.querySelector(".menu");

bars.addEventListener("click", function() {
    // Check if the screen size is small (mobile)
    if (window.innerWidth <= 768) {
        // Toggle the visibility of the menu
        menu.classList.toggle("menu-visible");
    }
});

// Add event listener for resizing the window
window.addEventListener("resize", function() {
    // Check if the screen size is greater than small (not mobile)
    if (window.innerWidth > 768) {
        // Ensure menu is visible on larger screens
        menu.classList.remove("menu-visible");
    }
});
