const introAudio = document.getElementById("introAudio");
const hoverAudio = document.getElementById("hoverAudio");
const leopard = document.getElementById("leopard");
const warning = document.getElementById("warning");

warning.addEventListener("click", function () {
  introAudio.currentTime = 0;
  introAudio.play();
});

leopard.addEventListener("mouseenter", function () {
  hoverAudio.currentTime = 0;
  hoverAudio.play();
});
