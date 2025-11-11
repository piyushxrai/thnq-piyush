document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.getElementById("textBox");
  const firstVideo = document.getElementById("firstVideo");
  const nextText = document.getElementById("nextText");
  const clickText = document.getElementById("clickText");
  const secondVideo = document.getElementById("secondVideo");
  const finalText = document.getElementById("finalText");

  // Fade in opening text
  setTimeout(() => {
    textBox.style.opacity = 1;
  }, 1000);

  // Show first video after text
  setTimeout(() => {
    firstVideo.style.display = "block";
    firstVideo.play().catch(err => console.log("Autoplay blocked:", err));
  }, 3000);

  // When first video ends
  firstVideo.addEventListener("ended", () => {
    nextText.classList.remove("hidden");
    nextText.style.opacity = 1;

    setTimeout(() => {
      clickText.classList.remove("hidden");
      clickText.style.opacity = 1;
    }, 1500);
  });

  // When user clicks "Click here"
  clickText.addEventListener("click", () => {
    clickText.classList.add("hidden");
    secondVideo.style.display = "block";

    // ✅ Handle autoplay with catch
    secondVideo.play().catch(err => {
      console.log("Autoplay blocked, showing play button");
      secondVideo.setAttribute("controls", "true"); // Let user play manually if needed
    });
  });

  // After second video ends
  secondVideo.addEventListener("ended", () => {
    finalText.classList.remove("hidden");
    finalText.style.opacity = 1;
  });
});
