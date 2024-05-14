// Function to check if the window is in focus
function isWindowFocused() {
  return !document.hidden;
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle visibility of elements based on window focus and scroll
function handleVisibility() {
  const elements = document.querySelectorAll(".animated");

  elements.forEach((element) => {
    if (isWindowFocused() && isInViewport(element)) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

// Event listener for scroll event
window.addEventListener("scroll", handleVisibility);

// Event listener for window focus event
window.addEventListener("focus", handleVisibility);

// Initial check for visibility on page load
document.addEventListener("DOMContentLoaded", handleVisibility);

// Load particles.js library for the hero section
particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Particle color set to white
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 4,
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Load particles.js library for the navbar section
particlesJS("particles-js-navbar", {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Particle color set to white
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 4,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// Event listener for contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    alert("Thank you for connecting!"); // Show thank you alert
  });

// Function to animate the "SHIVAM DAVE" letters based on scroll direction
function animateLettersOnScroll() {
  const letters = document.querySelectorAll(".letter");
  const currentScroll = window.scrollY;
  const scrollDirection = currentScroll > lastScroll ? "down" : "up";
  lastScroll = currentScroll;

  // Apply animation based on scroll direction
  letters.forEach((letter) => {
    if (scrollDirection === "down") {
      // Scrolling down: fade out and slide to the right
      letter.style.transition = "opacity 2s, transform 2s ease-in-out";
      letter.style.opacity = "0";
      letter.style.transform = "translateX(100%)";
    } else {
      // Scrolling up: fade in and slide in from the left
      letter.style.transition = "opacity 2s, transform 2s ease-in-out";
      letter.style.opacity = "1";
      letter.style.transform = "translateX(0)";
    }
  });
}

// Initialize last scroll position
let lastScroll = window.scrollY;

// Event listener for scroll event
window.addEventListener("scroll", animateLettersOnScroll);

// Apply animation styles to the letters with a duration of 2.5 seconds
document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter) => {
    letter.style.transition = "opacity 2.5s, transform 2.5s ease-in-out";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all navbar links
  const navbarLinks = document.querySelectorAll("nav ul li a");

  // Set the desired scroll duration (in milliseconds)
  const scrollDuration = 1500; // Adjust this value to control the speed of the scroll

  // Function to smoothly scroll to target section
  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Calculate the distance to the target section
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      // Scroll to the target section smoothly
      window.scroll({
        top: targetPosition,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  // Attach click event listener to each navbar link
  navbarLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  // Override the default scroll behavior with a custom duration
  window.scroll = function ({ top, left, behavior }) {
    // Calculate the current scroll position
    const startPosition = window.pageYOffset;

    // Calculate the distance to scroll
    const distance = top - startPosition;

    // Calculate the start time
    const startTime = performance.now();

    // Function to handle the scrolling
    const step = (currentTime) => {
      // Calculate the elapsed time
      const elapsedTime = currentTime - startTime;

      // Calculate the current scroll position using an ease function
      const progress = Math.min(elapsedTime / scrollDuration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      // Calculate the current scroll position
      const currentScrollPosition = startPosition + distance * ease;

      // Set the scroll position
      window.scrollTo({ top: currentScrollPosition, left });

      // If not yet complete, request another animation frame
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    // Start the animation
    requestAnimationFrame(step);
  };
});
// Function to check if an element is in the viewport with a threshold
function isInViewport(element, threshold = 0) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= windowHeight &&
    rect.left <= windowWidth &&
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold &&
    rect.left <= windowWidth * (1 - threshold) &&
    rect.right >= windowWidth * threshold
  );
}

// Function to handle fade-in and fade-out effects for projects
function handleProjectVisibility() {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    if (isInViewport(project, 0.2)) {
      // Adjust the threshold as needed
      project.classList.add("fade-in");
      project.classList.remove("fade-out");
    } else {
      project.classList.add("fade-out");
      project.classList.remove("fade-in");
    }
  });
}

// Event listener for scroll event
window.addEventListener("scroll", handleProjectVisibility);

// Event listener for window resize event (to handle changes in viewport)
window.addEventListener("resize", handleProjectVisibility);

// Call the function initially to set the visibility of projects
handleProjectVisibility();
