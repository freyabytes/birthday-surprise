document.addEventListener("DOMContentLoaded", function () {
  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");
  const screen3 = document.getElementById("screen3");

  const openEnvelope = document.getElementById("openEnvelope");
  const openAttachment = document.getElementById("openAttachment");

  const heartsLayer = document.getElementById("heartsLayer");
  const confettiLayer = document.getElementById("confettiLayer");

  let heartInterval;

  function showScreen(targetScreen) {
    screen1.classList.remove("active");
    screen2.classList.remove("active");
    screen3.classList.remove("active");

    targetScreen.classList.add("active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function createHeart() {
    const heart = document.createElement("div");
    const sizes = ["small", "medium", "large"];
    const symbols = ["❤", "♥", "♡"];

    const sizeClass =
      sizes[Math.floor(Math.random() * sizes.length)];

    const duration = 8 + Math.random() * 8;

    heart.className = `heart ${sizeClass}`;
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${duration}s`;

    heartsLayer.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, duration * 1000 + 500);
  }

  function startHearts() {
    for (let i = 0; i < 20; i++) {
      setTimeout(createHeart, i * 180);
    }

    heartInterval = setInterval(createHeart, 650);
  }

  function launchConfetti() {
    const colors = [
      "#f7a8bb",
      "#d94b6a",
      "#ffd6e2",
      "#ffffff",
      "#f0b41a",
      "#ff8fb1"
    ];

    for (let i = 0; i < 120; i++) {
      const piece = document.createElement("div");

      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}vw`;

      piece.style.background =
        colors[Math.floor(Math.random() * colors.length)];

      piece.style.animationDuration =
        `${2.8 + Math.random() * 2.2}s`;

      piece.style.animationDelay =
        `${Math.random() * 0.9}s`;

      piece.style.width =
        `${8 + Math.random() * 6}px`;

      piece.style.height =
        `${10 + Math.random() * 10}px`;

      confettiLayer.appendChild(piece);

      setTimeout(function () {
        piece.remove();
      }, 5500);
    }
  }

  if (!openEnvelope) {
    console.error("The openEnvelope element was not found.");
    return;
  }

  if (!openAttachment) {
    console.error("The openAttachment element was not found.");
    return;
  }

  openEnvelope.addEventListener("click", function () {
    showScreen(screen2);
  });

  openAttachment.addEventListener("click", function () {
    showScreen(screen3);
    launchConfetti();
  });

  startHearts();
});