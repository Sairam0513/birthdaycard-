// Floating hearts
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤"; // heart symbol
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // 3-6s
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);

// Gift button redirect
document.getElementById("giftBtn").addEventListener("click", () => {
  window.location.href = "surprise.html"; // redirect
});
