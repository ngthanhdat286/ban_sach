import { NavLink } from 'react-router-dom';

function GioHang() {
    return (
        <div className="content">
            <h1 class="d-flex justify-content-start">GIỎ HÀNG</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Đơn giá</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <input class="form-check-input" type="checkbox" value="" />
                        <td>Thám tử lừng danh Conan</td>
                        <td>20000</td>
                        <td>2</td>
                        <td>40000</td>
                        <td><button type="button" class="btn btn-warning btn-sm">Cập nhật</button> | <button type="button" class="btn btn-danger btn-sm">Xoá</button></td>
                    </tr>
                    <tr>
                        <input class="form-check-input" type="checkbox" value="" />
                        <td>Chú thuật hồi chiến</td>
                        <td>30000</td>
                        <td>3</td>
                        <td>90000</td>
                        <td><button type="button" class="btn btn-warning btn-sm">Cập nhật</button> | <button type="button" class="btn btn-danger btn-sm">Xoá</button></td>
                    </tr>
                    <tr>
                        <input class="form-check-input" type="checkbox" value="" />
                        <td>Từ điển Anh - Việt</td>
                        <td>115000</td>
                        <td>1</td>
                        <td>115000</td>
                        <td><button type="button" class="btn btn-warning btn-sm">Cập nhật</button> | <button type="button" class="btn btn-danger btn-sm">Xoá</button></td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-between mx-5">
                <NavLink to="/trang-san-pham">
                    <button type="button" class="btn btn-success btn-sm">
                        Tiếp tục mua hàng
                    </button>
                </NavLink>
                <NavLink to="/thanh-toan">
                    <button type="button" class="btn btn-danger btn-sm mx-3">
                        Thanh toán
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default GioHang;
