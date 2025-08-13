// main.js - Phiên bản hoàn chỉnh

/**
 * Hiển thị một thông báo động trên màn hình.
 * @param {string} message - Nội dung thông báo.
 * @param {string} type - Loại thông báo ('success' hoặc 'error').
 */
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    if (!notification) return;

    notification.textContent = message;
    notification.className = 'notification'; // Reset classes
    notification.classList.add(type);
    notification.classList.add('show');
    notification.classList.remove('hidden');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Chạy các script sau khi toàn bộ trang đã tải xong
window.addEventListener('load', function() {
    // --- LOGIC CHO SIDEBAR ĐỂ HIỂN THỊ LOGIN/LOGOUT ---
    const userActionsContainer = document.getElementById('user-actions');
    if (userActionsContainer) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            const username = localStorage.getItem('username');
            userActionsContainer.innerHTML = `
                <a href="profile.html" class="user-profile-link">
                    <div class="avatar"></div>
                    <div>
                        <span style="font-weight: 700; color: #fff;">${username}</span>
                        <span id="logout-link" style="display: block; font-size: 14px; color: #aaa; cursor: pointer;">Logout</span>
                    </div>
                </a>
            `;
            document.getElementById('logout-link').addEventListener('click', function(event) {
                event.preventDefault();
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('username');
                showNotification('Đăng xuất thành công!', 'success');
                setTimeout(() => { window.location.href = 'login.html'; }, 1000);
            });
        } else {
            userActionsContainer.innerHTML = `
                <a href="login.html" style="display: block; text-align: center; padding: 12px; background-color: #4a90e2; color: #fff; border-radius: 8px; font-weight: 700;">
                    <i class="fas fa-sign-in-alt" style="margin-right: 8px;"></i> Login
                </a>
            `;
        }
    }

    // --- LOGIC RIÊNG CHO TRANG PROFILE ---
    const profileUsername = document.getElementById('profileUsername');
    if (profileUsername) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn || isLoggedIn !== 'true') {
            showNotification('Vui lòng đăng nhập để xem trang này.', 'error');
            setTimeout(() => { window.location.href = 'login.html'; }, 1500);
            return;
        }
        document.getElementById('profileUsername').textContent = localStorage.getItem('username') || 'N/A';
        document.getElementById('profileEmail').textContent = localStorage.getItem('email') || 'N/A';
    }
});

// --- HIỆU ỨNG SPOTLIGHT ---
const body = document.querySelector('body');
if (body) {
    body.classList.add('spotlight-effect');
    window.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        requestAnimationFrame(() => {
            body.style.setProperty('--mouse-x', mouseX + 'px');
            body.style.setProperty('--mouse-y', mouseY + 'px');
        });
    });
}