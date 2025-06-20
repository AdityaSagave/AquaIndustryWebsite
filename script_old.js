

// Select the navbar element
const navbar = document.querySelector(".navbar");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // When scrolled down 100px or more
    navbar.classList.add("shrink-navbar");
  } else {
    navbar.classList.remove("shrink-navbar");
  }
});

// Function to show dropdown content
function showDropdown() {
  document.querySelector(".dropdown-content").style.display = "block";
}

// Function to hide dropdown content
function hideDropdown() {
  document.querySelector(".dropdown-content").style.display = "none";
}

// Add event listeners to show/hide dropdown content
document
  .querySelector(".dropdown")
  .addEventListener("mouseenter", showDropdown);
document
  .querySelector(".dropdown-content")
  .addEventListener("mouseenter", showDropdown); // Keep visible

document.querySelector(".dropdown").addEventListener("mouseleave", function () {
  // Delay the hiding to give user time to hover onto .dropdown-content
  setTimeout(function () {
    // Check if mouse is outside both .dropdown and .dropdown-content
    if (
      !document.querySelector(".dropdown").matches(":hover") &&
      !document.querySelector(".dropdown-content").matches(":hover")
    ) {
      hideDropdown();
    }
  }, 7000); // Adjust the delay if necessary
});

document
  .querySelector(".dropdown-content")
  .addEventListener("mouseleave", hideDropdown);

// Select the navbar element
const dropdown_content = document.querySelector(".dropdown-content");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // When scrolled down 100px or more
    dropdown_content.classList.add("shrink-dropdown-content");
  } else {
    dropdown_content.classList.remove("shrink-dropdown-content");
  }
});

// Select the navbar element
const drop_row2 = document.querySelector(".drop-row2");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // When scrolled down 100px or more
    drop_row2.classList.add("skrinked-drop-row2");
  } else {
    drop_row2.classList.remove("skrinked-drop-row2");
  }
});

let vid = document.getElementById("myVideo"); 

function playVid() { 
    vid.play(); 
}

document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector('.slides-container');

  // Trigger the animation after 3 seconds
  setTimeout(() => {
    slidesContainer.classList.add("open");
  }, 3000);
});


document.addEventListener("DOMContentLoaded", () => {
  const loadingBar = document.querySelector('.loading-bar');
  const slidesContainer = document.querySelector('.slides-container');

  // Start the loading animation
  setTimeout(() => {
    loadingBar.style.width = "100%";
  }, 100); // Slight delay to ensure smooth animation

  // Fade out the loading bar after 3 seconds
  setTimeout(() => {
    loadingBar.classList.add("fade-out");
  }, 3000);

  // Remove the loading bar from the DOM after fade-out
  setTimeout(() => {
    loadingBar.style.display = "none";
    slidesContainer.classList.add("open"); // Trigger the split animation
  }, 3500);
});


const section_3_slider = document.querySelector('.section-3 .container');

// Function to scroll right
function s3scrolltoRight() {
    const slideWidth = window.innerWidth; // Corrected: window.100vw => window.innerWidth
    section_3_slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
}

// Function to scroll left
function s3scrolltoLeft() {
    const slideWidth = window.innerWidth;
    section_3_slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
}
