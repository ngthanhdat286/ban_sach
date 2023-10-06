import { NavLink } from 'react-router-dom';

function SanPham(props) {
    return (
        <div className="col-3">
            <NavLink to="/trang-chi-tiet" className="san-pham">
                <img src={props.data.hinh_anh} alt="" className="san-pham-img" />
                <p className="ten-san-pham">{props.data.ten}</p>
                <p className="gia">Giá: {props.data.gia}đ</p>
                <button className="btn btn-primary chon-mua-button">Chọn mua</button>
            </NavLink>
        </div>
    );
}

export default SanPham;
