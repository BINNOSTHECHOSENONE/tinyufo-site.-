const introAudio = document.getElementById("introAudio");
const hoverAudio = document.getElementById("hoverAudio");
const leopard = document.getElementById("leopard");

window.addEventListener("load", function () {
  introAudio.play().catch(function () {
    console.log("Autoplay blocked by browser.");
  });
});

leopard.addEventListener("mouseenter", function () {
  hoverAudio.currentTime = 0;
  hoverAudio.play();
});
