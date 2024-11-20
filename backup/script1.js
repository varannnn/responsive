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
