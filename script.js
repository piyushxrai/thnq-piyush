document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.getElementById("textBox");
  const firstVideo = document.getElementById("firstVideo");
  const nextText = document.getElementById("nextText");
  const clickText = document.getElementById("clickText");
  const secondVideo = document.getElementById("secondVideo");
  const finalText = document.getElementById("finalText");

  // Show first text
  setTimeout(() => {
    textBox.style.opacity = 1;
  }, 1000);

  // Show first video
  setTimeout(() => {
    firstVideo.style.display = "block";
    firstVideo.play();
  }, 3000);

  // After first video ends
  firstVideo.addEventListener("ended", () => {
    nextText.classList.remove("hidden");
    nextText.style.opacity = 1;

    setTimeout(() => {
      clickText.classList.remove("hidden");
      clickText.style.opacity = 1;
    }, 1500);
  });

  // On "Click here"
  clickText.addEventListener("click", () => {
    clickText.classList.add("hidden");
    secondVideo.style.display = "block";
    secondVideo.play();
  });

  // After second video ends
  secondVideo.addEventListener("ended", () => {
    finalText.classList.remove("hidden");
    finalText.style.opacity = 1;
  });
});
