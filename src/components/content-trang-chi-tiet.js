import ChiTietSanPham from './content/chi-tiet-san-pham';
import SanPhamLienQuan from './content/san-pham-lien-quan';

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
        ],
    },
];

const SanPham = {
    ten: 'Thám tử lừng danh Conan',
    gia: 20000,
    hinh_anh: 'conan-vol-100.jpg',
    mo_ta: 'Những thi thể không rõ danh tính liên tục được phát hiện… Thủ phạm là tổ chức Áo đen. Đối thủ là Gin, Vodka, Chianti, Korn, Vermouth, Kir, và RUM. Kết thúc cuộc đấu trí cân tài cân sức ấy, sự thật được đưa ra ánh sáng là…',
};

function ContentTrangChiTiet() {
    const listLoaiSP = dsLoaiSanPham.map((item) => {
        return <SanPhamLienQuan data={item} />;
    });

    return (
        <div className="content">
            <ChiTietSanPham data={SanPham} />
            {listLoaiSP}
        </div>
    );
}

export default ContentTrangChiTiet;
