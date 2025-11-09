
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}



// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}



const words = ["PROGRAMMER.", "LEARNER.", "Explorer.", "DEVELOPER."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 150; // Typing speed
    const display = document.getElementById("display");

    function typeEffect() {
      const currentWord = words[wordIndex];
      let text = currentWord.substring(0, charIndex);
      display.textContent = text;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, speed);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, speed / 2);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 1000);
      }
    }

    typeEffect();
