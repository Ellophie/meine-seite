const fruitBtn = document.getElementById("popFruit");
let hasLanded = false;

setTimeout(() => {
  hasLanded = true;
}, 1900);

if (fruitBtn) {
  fruitBtn.addEventListener("click", () => {
    if (!hasLanded) return;

    fruitBtn.classList.remove("clicked");
    void fruitBtn.offsetWidth;
    fruitBtn.classList.add("clicked");

    const products = [
      "🍎", "🍐", "🍊", "🍋", "🍌", "🍓", "🫐", "🍒", "🥝",
      "🍅", "🥒", "🥕", "🥔", "🥬", "🥦", "🧅", "🧄", "🌽"
    ];

    const randomProduct = products[Math.floor(Math.random() * products.length)];
    fruitBtn.textContent = randomProduct;

    const messages = [
      "Frisch geerntet! 🌱",
      "Direkt vom Hof! 🚜",
      "Saisonal und regional!",
      "Bio-Qualität aus der Region!",
      "Natürlich gewachsen!",
      "Heute besonders frisch!",
      "Kurze Wege, voller Geschmack!"
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
