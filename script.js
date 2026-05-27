const fruitBtn = document.getElementById('popFruit');
let hasLanded = false;

// Wait for fall animation to complete
setTimeout(() => {
  hasLanded = true;
}, 2000);

fruitBtn.addEventListener('click', () => {
  if (!hasLanded) return; // Don't interact until fruit has landed
  
  // Bounce animation
  fruitBtn.classList.remove('clicked');
  void fruitBtn.offsetWidth; // Force reflow to restart animation
  fruitBtn.classList.add('clicked');

  // Change fruit randomly
  const fruits = ['🍎', '🍊', '🍋', '🍌', '🍉', '🍓', '🫐', '🍒', '🥝'];
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  fruitBtn.textContent = randomFruit;

  // Show a fun message
  const messages = [
    'Lecker! 😋',
    'Bio ist besser! 🌱',
    'Direkt vom Hof! 🚜',
    'Frische garantiert! ✨',
    'Natürlich gut! 💚'
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  
  // Create temporary message element
  const msg = document.createElement('div');
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

// Add animation to page
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
`;
document.head.appendChild(style);
