let bars = document.querySelector(".bars");
let menu = document.querySelector(".menu");

bars.addEventListener("click", function() {
    // Check if the screen width is less than or equal to a certain value (for small devices)
    if (window.innerWidth <= 768) {
        // Toggle the visibility of the menu by changing its display style
        if (menu.style.display === "none") {
            menu.style.transition = "opacity 0.4s"; // Add transition time
            menu.style.opacity = "1"; // Set opacity to show the menu
            menu.style.display = "block";
        } else {
            menu.style.transition = "opacity 0.4s"; // Add transition time
            menu.style.opacity = "0"; // Set opacity to hide the menu
            setTimeout(() => {
                menu.style.display = "none";
            }, 400); // Wait for the transition to complete before hiding the menu
        }
    }
});
