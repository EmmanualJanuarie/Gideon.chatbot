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

// Navigate to Gideon's main chat interface
function askGideon() {
  window.location.href = "/gideon";
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

  function goToPrompt(prompt) {
    showLoadingMessage(`🧠 Your selected prompt "${prompt}" is loading...`);
    // You can navigate or do something here if needed.
  }

  function askGideon() {
    showLoadingMessage(`💬 Launching Gideon… Please wait.`);
    // Trigger any further action here if needed.
  }

  document.getElementById('themeToggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
  });

  window.addEventListener("DOMContentLoaded", () => {
    showLoadingMessage("🚀 Gideon is starting up...");
  });

