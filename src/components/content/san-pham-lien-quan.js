import SanPham from './san-pham';

function SanPhamLienQuan(props) {
    const dsSanPham = props.data.ds_san_pham.map((item) => {
        return <SanPham data={item} />;
    });

    return (
        <div>
            <div className="san-pham-lien-quan">
                <span>Sản phẩm liên quan</span>
            </div>
            <div className="row">{dsSanPham}</div>
        </div>
    );
}

export default SanPhamLienQuan;
