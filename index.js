// Khai báo các phần tử DOM
let welcomeMessage = document.getElementById('welcomeMessage');
let logoutButton = document.getElementById('logoutButton');
const addToCartButton = document.querySelector('.add-to-cart-btn');

// Hàm xử lý đăng xuất
function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
}

// Hàm xử lý khi nhấn nút "Thêm vào giỏ hàng"
function addToCart(event) {
    // Lấy thông tin sản phẩm từ thuộc tính data-
    const apartmentElement = event.target.closest('.apartment');
    const product = {
        name: apartmentElement.dataset.name,
        price: apartmentElement.dataset.price
    };

    // Lấy giỏ hàng hiện tại từ localStorage, nếu không có thì tạo mảng rỗng
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Thêm sản phẩm mới vào giỏ hàng
    cart.push(product);

    // Lưu lại giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

// Gán sự kiện
logoutButton.addEventListener('click', logout);
addToCartButton.addEventListener('click', addToCart);

// Kiểm tra đăng nhập khi tải trang
window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && isLoggedIn === 'true') {
        let username = localStorage.getItem('username');
        welcomeMessage.textContent = `Chào mừng, ${username}!`;
    } else {
        alert('Bạn chưa đăng nhập.');
        window.location.href = 'login.html';
    }
}