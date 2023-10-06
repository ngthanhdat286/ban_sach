import { useEffect, useState } from 'react';
import LoaiSanPhamTrangChu from './content/loai-san-pham-trang-chu';

function ContentTrangChu() {
    const [dsLoaiSanPham, setDSLoaiSanPham] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/get-data.php')
            .then((res) => res.json())
            .then((json) => setDSLoaiSanPham(json));
    });

    const listLoaiSP = dsLoaiSanPham.map((item) => {
        return <LoaiSanPhamTrangChu data={item} />;
    });

    return (
        <div className="content">
            {listLoaiSP}
        </div>
    );
}

export default ContentTrangChu;
