// Hàm hiển thị sản phẩm trong giỏ hàng
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
        return;
    }

    // Xóa nội dung cũ
    cartItemsContainer.innerHTML = '';

    // Lặp qua các sản phẩm và hiển thị
    cart.forEach(product => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${product.name}</span>
            <strong>${product.price}</strong>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Gán sự kiện cho nút thanh toán
document.getElementById('paymentButton').addEventListener('click', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Giỏ hàng trống, không thể thanh toán.');
        return;
    }
    // Chuyển hướng đến trang thanh toán
    window.location.href = 'payment.html';
});

// Chạy khi trang tải xong
window.onload = function() {
    // Kiểm tra đăng nhập
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
        alert('Bạn cần đăng nhập để xem giỏ hàng.');
        window.location.href = 'login.html';
        return; // Dừng thực thi nếu chưa đăng nhập
    }

    // Hiển thị giỏ hàng
    displayCart();
};