import SanPham from './san-pham';

function LoaiSanPham(props) {
    const dsSanPham = props.data.ds_san_pham.map((item) => {
        return <SanPham data={item} />;
    });

    return (
        <div>
            <div className="loai-san-pham-heading">
                <span>{props.data.ten}</span>
            </div>
            <div className="row">{dsSanPham}</div>
        </div>
    );
}

export default LoaiSanPham;
