function ChiTietSanPham(props) {
    return (
        <div className="chi-tiet-san-pham">
            <p className="chi-tiet-san-pham-ten">TÊN SẢN PHẨM</p>
            <div className="thong-tin-san-pham-wrapper">
                <div className="group-picture">
                    <img className="thong-tin-sp-img" src="conan-vol-100.jpg" alt="" />
                    <img className="thong-tin-sp-img" src="conan-vol-100.jpg" alt="" />
                    <img className="thong-tin-sp-img" src="conan-vol-100.jpg" alt="" />
                    <img className="thong-tin-sp-img" src="conan-vol-100.jpg" alt="" />
                </div>
                <div className="thong-tin-san-pham">
                    <p className="thong-tin-sp-ten">{props.data.ten}</p>
                    <p>Giá: {props.data.gia}đ</p>
                    <div className="thong-tin-sp-so-luong">
                        <span>Số lượng: </span>
                        <input className="input-so-luong" type="number" />
                    </div>
                    <button className="btn btn-primary chon-mua-button">Chọn mua</button>
                </div>
            </div>
            <div className="thong-tin-chi-tiet">
                <p className="thong-tin-chi-tiet-heading">Thông tin chi tiết</p>
                <p className="thong-tin-chi-tiet-paragraph">{props.data.mo_ta}</p>
            </div>
        </div>
    );
}

export default ChiTietSanPham;
