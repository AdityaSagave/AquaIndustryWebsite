class SpecialHeader extends HTMLElement {
    // Mark the connectedCallback method as async
    async connectedCallback() {
        try {
            // Fetch the header.html file
            const response = await fetch('header.html');
            if (!response.ok) {
                throw new Error(`Failed to fetch header.html: ${response.statusText}`);
            }

            // Get the content of header.html
            const html = await response.text();

            // Inject the HTML into the custom element
            this.innerHTML = html;

            // Dynamically load the linked CSS and JS files
            this.loadExternalResources();
        } catch (error) {
            console.error('Error loading header:', error);
        }
    }

    loadExternalResources() {
        // Append the header.css file
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'header.css';
        document.head.appendChild(link);

        // Append the script.js file
        const script = document.createElement('script');
        script.src = 'script.js';
        document.body.appendChild(script);
    }
}

// Define the custom element
customElements.define('special-header', SpecialHeader);




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

// document.addEventListener("DOMContentLoaded", () => {
//   const slidesContainer = document.querySelector('.slides-container');

//   // Trigger the animation after 3 seconds
//   setTimeout(() => {
//     slidesContainer.classList.add("open");
//   }, 3000);
// });


function onLoadingComplete() {
  const slidesContainer = document.querySelector('.slides-container');
  slidesContainer.classList.add("open");
  console.log('Loading complete!');
  // Add any additional functionality here
}

document.addEventListener('DOMContentLoaded', function () {
  const loadingBar = document.getElementById('loading-bar');
  loadingBar.addEventListener('animationend', function () {
    onLoadingComplete();
    const container = document.getElementById('loading-bar-container');
    container.classList.add('fade-out');
    container.addEventListener('animationend', function () {
      container.style.display = 'none';
    });
  });
});



customElements.define('special-header', SpecialHeader);