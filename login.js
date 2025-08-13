// login.js
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        showNotification('Vui lòng điền đầy đủ thông tin.', 'error');
        return;
    }

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        showNotification('Đăng nhập thành công!', 'success');
        localStorage.setItem('isLoggedIn', 'true');
        setTimeout(() => { window.location.href = 'index.html'; }, 1000);
    } else {
        showNotification('Tên đăng nhập hoặc mật khẩu không đúng.', 'error');
    }
});