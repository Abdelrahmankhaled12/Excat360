import translations from "./translations.js";


// Selecting the buttonScroll element and the header element from the DOM
let buttonScroll = document.querySelector(".buttonScroll");
let header = document.getElementById("header");

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

    if (header) {
        // If the vertical scroll position is greater than or equal to 100 pixels
        if (window.scrollY >= 100) {
            // Add the 'show' class to the header element
            header.classList.add("show");
        } else {
            // Otherwise, remove the 'show' class from the header element
            header.classList.remove("show");
        }
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



const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") || "en";
    setLanguage(language);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.innerHTML = translations[language][translationKey];
    });
    document.dir = language === "ar" ? "rtl" : "ltr";
};