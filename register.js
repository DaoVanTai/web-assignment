// register.js
const registerForm = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const emailInput = document.getElementById('email');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const email = emailInput.value.trim();

    if (username === '' || password === '' || confirmPassword === '' || email === '') {
        showNotification('Vui lòng điền đầy đủ thông tin.', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showNotification('Mật khẩu không khớp.', 'error');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('isLoggedIn', 'false');
    
    showNotification('Đăng ký thành công! Đang chuyển đến trang đăng nhập...', 'success');

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
});