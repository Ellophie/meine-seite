const seasonButton = document.getElementById("seasonButton");

if (seasonButton) {
  seasonButton.addEventListener("click", () => {
    const offers = [
      "Diese Woche frisch: Karotten, Kartoffeln und saisonale Äpfel.",
      "Aktuell erhältlich: Bio-Eier, frisches Brot und hausgemachte Konfitüre.",
      "Vom Feld in den Laden: Salat, Kräuter und regionales Gemüse.",
      "Saisonal im Angebot: Kürbis, Lauch und frische Hofprodukte."
    ];

    const randomOffer = offers[Math.floor(Math.random() * offers.length)];

    const oldToast = document.querySelector(".toast");
    if (oldToast) oldToast.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = randomOffer;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2400);
  });
}
