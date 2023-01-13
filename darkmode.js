const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  // Get the current state of the dark mode toggle from local storage
  const currentState = localStorage.getItem('darkMode');

  if (currentState === 'enabled') {
    // If dark mode is currently enabled, disable it
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  } else {
    // If dark mode is currently disabled, enable it
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }
}

window.onload = function () {
  // Get the current state of the dark mode toggle from local storage
  const currentState = localStorage.getItem('darkMode');

  if (currentState === 'enabled') {
    // If dark mode is currently enabled, enable it
    document.body.classList.add('dark-mode');
  } else {
    // If dark mode is currently disabled, disable it
    document.body.classList.remove('dark-mode');
  }
}
