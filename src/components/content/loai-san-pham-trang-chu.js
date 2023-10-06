import { NavLink } from 'react-router-dom';
import SanPham from './san-pham';

function LoaiSanPhamTrangChu(props) {
    const dsSanPham = props.data.ds_san_pham.map((item) => {
        return <SanPham data={item} />;
    });

    return (
        <div>
            <div className="loai-san-pham-trang-chu">
                <span className="loai-san-pham-trang-chu-heading">{props.data.ten}</span>
                <NavLink to="trang-san-pham">Xem tất cả</NavLink>
            </div>
            <div className="row">{dsSanPham}</div>
        </div>
    );
}

export default LoaiSanPhamTrangChu;
