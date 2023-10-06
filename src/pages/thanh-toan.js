function ThanhToan() {
    return (
        <div className="content">
            <h1 class="d-flex justify-content-start">THANH TOÁN</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Đơn giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Thám tử lừng danh Conan</td>
                        <td>20000</td>
                        <td>2</td>
                        <td>40000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Chú thuật hồi chiến</td>
                        <td>30000</td>
                        <td>3</td>
                        <td>90000</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-between mx-5">
                <div>
                    <span>Thông tin người nhận hàng</span>
                    <ul class="text-start" style={{ listStyle: 'none' }}>
                        <li>
                            Tên: <span>Nguyễn Thành Đạt</span>
                        </li>
                        <li>
                            Điện thoại: <span>0123456789</span>
                        </li>
                        <li>
                            Địa chỉ: <span>Bình Thạnh, TP. HCM</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <span>Hình thức thanh toán</span>
                    <ul class="text-start" style={{ listStyle: 'none' }}>
                        <li>COD</li>
                        <li>Chuyển khoản ngân hàng</li>
                        <li>Thanh toán qua MOMO</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-danger btn-sm mx-5">
                    Thanh toán
                </button>
            </div>
        </div>
    );
}

export default ThanhToan;
