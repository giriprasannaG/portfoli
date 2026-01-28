// Text reveal animation
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.animation = `fadeUp 1s ease forwards ${i * 0.3}s`;
});

// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// animation keyframes
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);
