// Khai báo các phần tử DOM
const paymentForm = document.getElementById('paymentForm');
const cardNameInput = document.getElementById('cardName');
const cardNumberInput = document.getElementById('cardNumber');
const expiryDateInput = document.getElementById('expiryDate');
const cvvInput = document.getElementById('cvv');

// Hàm xử lý logic thanh toán
function processPayment() {
    // Lấy giá trị từ các trường nhập liệu
    const cardName = cardNameInput.value.trim();
    const cardNumber = cardNumberInput.value.trim();
    const expiryDate = expiryDateInput.value.trim();
    const cvv = cvvInput.value.trim();

    // Kiểm tra tính hợp lệ đơn giản
    if (cardName === '' || cardNumber === '' || expiryDate === '' || cvv === '') {
        alert('Vui lòng điền đầy đủ thông tin thanh toán.');
        return;
    }

    // Mô phỏng quá trình thanh toán thành công
    alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');

    // Chuyển hướng về trang chủ sau khi thanh toán
    window.location.href = 'index.html';
}

// Gán sự kiện submit cho form
paymentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form tự động gửi đi
    processPayment();
});

// Hàm chạy khi tải trang để kiểm tra đăng nhập
window.onload = function() {
    // Lấy trạng thái đăng nhập từ localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // Nếu người dùng chưa đăng nhập (isLoggedIn không phải là 'true')
    if (isLoggedIn !== 'true') {
        alert('Bạn cần đăng nhập để thực hiện thanh toán.');
        // Điều hướng về trang đăng nhập
        window.location.href = 'login.html';
    }
}