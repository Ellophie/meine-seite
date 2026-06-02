:root {
  color-scheme: light;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f3f5ef;
  color: #1f2d22;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  background: linear-gradient(180deg, #f6f7f2 0%, #e2eadb 100%);
  color: #1f2d22;
  line-height: 1.7;
}

.page-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1.5rem 3rem;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(31, 45, 34, 0.12);
  border-radius: 28px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 24px 60px rgba(31, 45, 34, 0.08);
}

.eyebrow {
  margin: 0 0 0.8rem;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #55745b;
}

.hero-copy h1 {
  margin: 0 0 1rem;
  font-size: clamp(2.6rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.hero-copy p {
  margin: 0;
  font-size: 1.12rem;
  max-width: 620px;
}

.hero-image-wrap,
.card-figure {
  margin: 0;
  overflow: hidden;
  border-radius: 22px;
  box-shadow: 0 16px 38px rgba(31, 45, 34, 0.1);
}

.hero-image,
.card-figure img {
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

.hero-image {
  aspect-ratio: 4 / 3;
}

.card-figure img {
  aspect-ratio: 16 / 10;
  transition: transform 0.35s ease;
}

.card-figure img:hover {
  transform: scale(1.03);
}

.season-button {
  margin-top: 1.8rem;
  border: none;
  border-radius: 999px;
  background: #2f5d3a;
  color: #ffffff;
  padding: 0.9rem 1.35rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(47, 93, 58, 0.22);
  transition: transform 0.2s ease, background 0.2s ease;
}

.season-button:hover {
  background: #244a2e;
  transform: translateY(-2px);
}

.season-button:active {
  transform: translateY(0);
}

.card {
  display: grid;
  grid-template-columns: 0.9fr 1.4fr;
  gap: 1.75rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(31, 45, 34, 0.1);
  border-radius: 24px;
  padding: 1.6rem;
  margin-bottom: 1.5rem;
  align-items: center;
}

.card-copy h2 {
  margin: 0 0 0.75rem;
  font-size: 1.75rem;
  letter-spacing: -0.03em;
}

.card-copy p {
  margin: 0;
  font-size: 1.04rem;
  color: #37483a;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  background: #1f2d22;
  color: #ffffff;
  padding: 0.9rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: 0 16px 36px rgba(31, 45, 34, 0.25);
  animation: fadeInOut 2.4s ease forwards;
  z-index: 1000;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(12px);
  }

  20%,
  80% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(12px);
  }
}

@media (max-width: 820px) {
  .hero,
  .card {
    grid-template-columns: 1fr;
  }

  .page-shell {
    padding: 2rem 1rem;
  }

  .hero {
    padding: 2rem 1.25rem;
  }

  .card {
    padding: 1.25rem;
  }
}

@media (max-width: 560px) {
  .hero-copy h1 {
    font-size: 2.5rem;
  }

  .hero-copy p,
  .card-copy p {
    font-size: 1rem;
  }

  .toast {
    width: calc(100% - 2rem);
    text-align: center;
    border-radius: 18px;
  }
}
