const video1 = document.getElementById(video1);
const video2 = document.getElementById(video2);
const textAfterVideo1 = document.getElementById(textAfterVideo1);
const clickText = document.getElementById(clickText);
const popup = document.getElementById(popup);
const endingText = document.getElementById(endingText);

video1.addEventListener(ended, () = {
  textAfterVideo1.classList.remove(hidden);
  setTimeout(() = clickText.classList.remove(hidden), 2000);
});

clickText.addEventListener(click, () = {
  popup.classList.remove(hidden);
  video2.play();
  clickText.classList.add(hidden);
});

video2.addEventListener(ended, () = {
  popup.classList.add(hidden);
  setTimeout(() = endingText.classList.remove(hidden), 1500);
});