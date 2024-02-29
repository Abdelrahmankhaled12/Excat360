// Selecting the buttonScroll element and the header element from the DOM
let buttonScroll = document.querySelector(".buttonScroll");
let header = document.querySelector("header");

// Event handler for window scroll event
window.onscroll = function () {
    // If the vertical scroll position is greater than or equal to 400 pixels
    if (window.scrollY >= 400) {
        // Make the buttonScroll visible
        buttonScroll.style.opacity = "1";
    } else {
        // Otherwise, hide the buttonScroll
        buttonScroll.style.opacity = "0";
    }
    // If the vertical scroll position is greater than or equal to 100 pixels
    if (window.scrollY >= 100) {
        // Add the 'show' class to the header element
        header.classList.add("show");
    } else {
        // Otherwise, remove the 'show' class from the header element
        header.classList.remove("show");
    }
};

// Event handler for window click event
window.onclick = function () {
    // Event handler for buttonScroll click event
    buttonScroll.onclick = function () {
        // Scroll to the top of the page smoothly when buttonScroll is clicked
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
};

// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    // Execute the following code after a delay of 5000 milliseconds (5 seconds)
    setTimeout(() => {
        // Initialize the WOW.js library for animating elements
        new WOW().init();
        // Hide the loader element after 5 seconds
        document.getElementById("loader").style.display = "none";
        // Hide the effect element after 5 seconds
        document.getElementById("effect").style.display = "none";
        // Show the sections element after 5 seconds
        document.getElementById("sections").style.display = "block";
        // Otherwise, hide the buttonScroll
        buttonScroll.style.opacity = "0";
    }, 4000); // 4000 milliseconds = 4 seconds
});

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

// Event listener for 'showMenu' button click event
document.getElementById("showMenu").addEventListener("click", function () {
    // Add the 'showMenuMobile' class to the 'menuMobile' element when 'showMenu' button is clicked
    document.getElementById("menuMobile").classList.add("showMenuMobile");
});

// Event listener for 'buttonClose' button click event
document.getElementById("buttonClose").addEventListener("click", function () {
    // Remove the 'showMenuMobile' class from the 'menuMobile' element when 'buttonClose' button is clicked
    document.getElementById("menuMobile").classList.remove("showMenuMobile");
});

// Event listener for 'outMenu' button click event
document.getElementById("outMenu").addEventListener("click", function () {
    // Remove the 'showMenuMobile' class from the 'menuMobile' element when 'outMenu' button is clicked
    document.getElementById("menuMobile").classList.remove("showMenuMobile");
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
