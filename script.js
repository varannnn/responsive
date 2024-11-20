const words = [
  " Backend Developer",
  " Frontend Developer",
  " Full Stack Developer",
  // " អ្នកអភិវឌ្ឍន៍ផ្នែកខាងក្រោយ",
  // " អ្នកអភិវឌ្ឍន៍ផ្នែកខាងមុខ",
  // " អ្នកអភិវឌ្ឍន៍ជង់ពេញ",
];
let wordIndex = 0;
let charIndex = 0;
let currentWord = words[wordIndex];
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < currentWord.length) {
    typingElement.innerHTML += currentWord.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 1000); // Pause before deleting
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    typingElement.innerHTML = currentWord.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    currentWord = words[wordIndex];
    setTimeout(typeEffect, 500); // Pause before typing the next word
  }
}

window.onload = typeEffect;

// Intro

document.addEventListener("DOMContentLoaded", function () {
  const introContainer = document.querySelector(".intro-container");
  const mainContent = document.getElementById("main-content");
  const skipIntro = document.getElementById("skip-intro");

  // Automatically hide intro after 5 seconds
  setTimeout(() => {
    introContainer.style.display = "none";
    mainContent.style.display = "block";
    mainContent.classList.remove("hidden");
  }, 5000);

  // Skip intro on link click
  skipIntro.addEventListener("click", function (e) {
    e.preventDefault();
    introContainer.style.display = "none";
    mainContent.style.display = "block";
    mainContent.classList.remove("hidden");
  });
});
