document.addEventListener('DOMContentLoaded', () => {
  // Einfaches Begrüßungs-Alert
  alert("Willkommen auf der Clan-Homepage 'Friendship'!");

  // Beispiel: Scroll to top Button hinzufügen
  const scrollTopButton = document.createElement('button');
  scrollTopButton.textContent = "Nach oben";
  scrollTopButton.style.position = "fixed";
  scrollTopButton.style.bottom = "20px";
  scrollTopButton.style.right = "20px";
  scrollTopButton.style.padding = "10px";
  scrollTopButton.style.backgroundColor = "#222";
  scrollTopButton.style.color = "#fff";
  scrollTopButton.style.border = "none";
  scrollTopButton.style.cursor = "pointer";

  document.body.appendChild(scrollTopButton);

  // Scroll-Funktion
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
