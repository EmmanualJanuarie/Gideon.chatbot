// Toggle between light and dark mode
document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
});

// Navigate to Gideon with a prompt
function goToPrompt(prompt) {
  const encodedPrompt = encodeURIComponent(prompt);
  window.location.href = `/gideon?prompt=${encodedPrompt}`;
}

//Loading card js:
  const loadingCard = document.getElementById("loadingCard");
  const loadingText = document.getElementById("loadingText");

  function showLoadingMessage(message) {
    loadingText.textContent = message;
    loadingCard.classList.add("show");
    setTimeout(() => {
      loadingCard.classList.remove("show");
    }, 3000);
  }

  
  function askGideon() {
    showLoadingMessage(`💬 Launching Gideon… Please wait.`);
    setTimeout(() => {
    window.open('https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/06/04/05/20250604055827-JE1NJD18.json', '_blank');
    }, 5000); // 5000 milliseconds = 5 seconds
    // Trigger any further action here if needed.
  }

  document.getElementById('themeToggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
  });

  window.addEventListener("DOMContentLoaded", () => {
    showLoadingMessage("🚀 Gideon is starting up...");
  });

