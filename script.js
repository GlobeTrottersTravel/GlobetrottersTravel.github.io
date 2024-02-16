
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function (e) {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // Optionally toggle the checkbox label if needed
    // this.checked ? this.setAttribute('label', 'Hide Password') : this.setAttribute('label', 'Show Password');
});
