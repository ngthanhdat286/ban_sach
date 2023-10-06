import LoaiSanPham from './content/loai-san-pham';

const dsLoaiSanPham = [
    {
        ten: 'Truyện tranh',
        ds_san_pham: [
            {
                ten: 'Thám tử lừng danh Conan',
                gia: 20000,
                hinh_anh: 'conan-vol-100.jpg',
            },
            {
                ten: 'One Piece',
                gia: 25000,
                hinh_anh: 'one-piece-vol-104.jpg',
            },
            {
                ten: 'Chú thuật hồi chiến',
                gia: 30000,
                hinh_anh: 'chu-thuat-hoi-chien-vol-1.jpg',
            },
            {
                ten: 'Thám tử lừng danh Conan',
                gia: 20000,
                hinh_anh: 'conan-vol-100.jpg',
            },
            {
                ten: 'One Piece',
                gia: 25000,
                hinh_anh: 'one-piece-vol-104.jpg',
            },
            {
                ten: 'Chú thuật hồi chiến',
                gia: 30000,
                hinh_anh: 'chu-thuat-hoi-chien-vol-1.jpg',
            },
            {
                ten: 'Thám tử lừng danh Conan',
                gia: 20000,
                hinh_anh: 'conan-vol-100.jpg',
            },
            {
                ten: 'One Piece',
                gia: 25000,
                hinh_anh: 'one-piece-vol-104.jpg',
            },
            {
                ten: 'Chú thuật hồi chiến',
                gia: 30000,
                hinh_anh: 'chu-thuat-hoi-chien-vol-1.jpg',
            },
            {
                ten: 'Thám tử lừng danh Conan',
                gia: 20000,
                hinh_anh: 'conan-vol-100.jpg',
            },
            {
                ten: 'One Piece',
                gia: 25000,
                hinh_anh: 'one-piece-vol-104.jpg',
            },
            {
                ten: 'Chú thuật hồi chiến',
                gia: 30000,
                hinh_anh: 'chu-thuat-hoi-chien-vol-1.jpg',
            },
        ],
    },
];

function ContentTrangSanPham() {
    const listLoaiSP = dsLoaiSanPham.map((item) => {
        return <LoaiSanPham data={item} />;
    });

    return (
        <div className="content">
            {listLoaiSP}
            <button className="xem-them-btn">Xem thêm (123 sản phẩm)</button>
        </div>
    );
}

export default ContentTrangSanPham;
