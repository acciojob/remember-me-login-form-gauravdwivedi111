const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMe = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');

// --- Initialization ---
// Check if credentials exist on page load
window.onload = () => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
        existingBtn.style.display = 'block';
    }
};

// --- Form Submission ---
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (rememberMe.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingBtn.style.display = 'block';
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingBtn.style.display = 'none';
    }
});

// --- Existing User Login ---
existingBtn.addEventListener('click', () => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
        alert(`Logged in as ${savedUser}`);
    }
});