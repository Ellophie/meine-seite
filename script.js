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

    const oldMsg = document.querySelector(".fruit-message");
    if (oldMsg) oldMsg.remove();

    const msg = document.createElement("div");
    msg.className = "fruit-message";
    msg.textContent = randomMsg;

    document.body.appendChild(msg);

    setTimeout(() => {
      msg.remove();
    }, 2000);
  });
}
