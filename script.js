// Button click and double-click actions
const button = document.getElementById('actionButton');
button.addEventListener('click', () => {
    button.textContent = 'Clicked!';
    button.style.backgroundColor = 'lightgreen';
});
button.addEventListener('dblclick', () => {
    alert('Secret Action Triggered!');
});

// Keypress detection
const keypressInput = document.getElementById('keypressInput');
keypressInput.addEventListener('input', (e) => {
    console.log(`You typed: ${e.target.value}`);
});

// Tabs functionality
const tabs = document.querySelectorAll('.tab');
const tabPanes = document.querySelectorAll('.tab-pane');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabPanes.forEach(pane => pane.classList.add('hidden'));
        document.getElementById(tab.dataset.content).classList.remove('hidden');
    });
});

// Form validation
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');
emailInput.addEventListener('input', () => {
    if (!emailInput.validity.valid) {
        emailFeedback.textContent = 'Invalid email format';
    } else {
        emailFeedback.textContent = '';
    }
});

const passwordInput = document.getElementById('password');
const passwordFeedback = document.getElementById('passwordFeedback');
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        passwordFeedback.textContent = 'Password must be at least 8 characters';
    } else {
        passwordFeedback.textContent = '';
    }
});

// Form submission
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});