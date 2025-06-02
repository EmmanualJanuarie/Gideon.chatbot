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
