const fruitBtn = document.getElementById("popFruit");
let hasLanded = false;

setTimeout(() => {
  hasLanded = true;
}, 1800);

if (fruitBtn) {
  fruitBtn.addEventListener("click", () => {
    if (!hasLanded) return;

    fruitBtn.classList.remove("clicked");
    void fruitBtn.offsetWidth;
    fruitBtn.classList.add("clicked");

    const fruits = [
      "🍎",
      "🍊",
      "🍋",
      "🍌",
      "🍉",
      "🍓",
      "🫐",
      "🍒",
      "🥝",
      "🍅",
      "🥒",
      "🥕",
      "🥦",
      "🌽"
    ];

    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    fruitBtn.textContent = randomFruit;

    const messages = [
      "Lecker! 😋",
      "Bio ist besser! 🌱",
      "Direkt vom Hof! 🚜",
      "Frische garantiert! ✨",
      "Natürlich gut! 💚"
    ];

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];

    const msg = document.createElement("div");
    msg.textContent = randomMsg;
    msg.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(27, 50, 30, 0.95);
      color: #eaf8ea;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-size: 1.3rem;
      font-weight: 600;
      z-index: 1001;
      animation: fadeInOut 2s ease-in-out forwards;
    `;

    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
  });
}
