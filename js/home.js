// Event listener for 'seeMore' button click event
document.getElementById("seeMore").addEventListener("click", function () {
    // Scroll to the 'about' section when 'seeMore' button is clicked
    handleScrollToSection("about");
});

// Event listener for 'contactUsButton' button click event
document.getElementById("contactUsButton").addEventListener("click", function () {
    // Scroll to the 'contact' section when 'contactUsButton' button is clicked
    handleScrollToSection("contact");
});

// Event listeners for click events on each list item in the mobile menu
document.querySelectorAll('.menuMobile ul li').forEach(item => {
    item.addEventListener("click", () => {
        // Remove the 'showMenuMobile' class from the 'menuMobile' element when a menu item is clicked
        document.getElementById("menuMobile").classList.remove("showMenuMobile");
        // Scroll to the corresponding section when a menu item is clicked
        handleScrollToSection(item.getAttribute("data-id"));
    });
});

// Event listeners for click events on each list item in the header menu
document.querySelectorAll('header ul li').forEach(item => {
    item.addEventListener("click", () => {
        // Scroll to the corresponding section when a menu item in the header is clicked
        handleScrollToSection(item.getAttribute("data-id"));
    });
});

// Function to handle scrolling to a section
const handleScrollToSection = (value) => {
    // Get the DOM element corresponding to the provided value (section id)
    const section = document.getElementById(value);
    // Check if the "section" element exists
    if (section) {
        // Get the distance between the top of the "section" element and the top of the viewport
        const distanceToTop = section.getBoundingClientRect().top;
        // Check if the absolute value of the distance is less than 100 pixels
        if (Math.abs(distanceToTop) < 100) {
            // If the section is already within 100 pixels, simply scroll smoothly to the top of the section
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If the section is more than 100 pixels away, scroll smoothly to bring the section to the top of the viewport
            window.scrollBy({
                top: distanceToTop - 100, // Subtracting 100 pixels to ensure it's less than 100 pixels away
                behavior: 'smooth'
            });
        }
    }
};