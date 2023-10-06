<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

$dsLoaiSanPham = [
    [
        'ten' => 'Truyện tranh',
        'ds_san_pham' => [
            [
                'ten' => 'Thám tử lừng danh Conan',
                'gia' => 20000,
                'hinh_anh' => 'conan-vol-100.jpg',
            ],
            [
                'ten' => 'One Piece',
                'gia' => 25000,
                'hinh_anh' => 'one-piece-vol-104.jpg',
            ],
            [
                'ten' => 'Chú thuật hồi chiến',
                'gia' => 30000,
                'hinh_anh' => 'chu-thuat-hoi-chien-vol-1.jpg',
            ],
            [
                'ten' => 'Thám tử lừng danh Conan',
                'gia' => 20000,
                'hinh_anh' => 'conan-vol-100.jpg',
            ],
            [
                'ten' => 'One Piece',
                'gia' => 25000,
                'hinh_anh' => 'one-piece-vol-104.jpg',
            ],
            [
                'ten' => 'Chú thuật hồi chiến',
                'gia' => 30000,
                'hinh_anh' => 'chu-thuat-hoi-chien-vol-1.jpg',
            ],
            [
                'ten' => 'Thám tử lừng danh Conan',
                'gia' => 20000,
                'hinh_anh' => 'conan-vol-100.jpg',
            ],
            [
                'ten' => 'One Piece',
                'gia' => 25000,
                'hinh_anh' => 'one-piece-vol-104.jpg',
            ],
        ],
    ],
    [
        'ten' => 'Sách giáo dục',
        'ds_san_pham' => [
            [
                'ten' => 'Luyện thi Ielts',
                'gia' => 150000,
                'hinh_anh' => 'luyen-thi-ielts.jpg',
            ],
            [
                'ten' => 'Từ điển Anh-Việt',
                'gia' => 115000,
                'hinh_anh' => 'tu-dien-anh-viet.webp',
            ],
            [
                'ten' => 'Luyện thi Ielts',
                'gia' => 150000,
                'hinh_anh' => 'luyen-thi-ielts.jpg',
            ],
            [
                'ten' => 'Từ điển Anh-Việt',
                'gia' => 115000,
                'hinh_anh' => 'tu-dien-anh-viet.webp',
            ],
            [
                'ten' => 'Luyện thi Ielts',
                'gia' => 150000,
                'hinh_anh' => 'luyen-thi-ielts.jpg',
            ],
            [
                'ten' => 'Từ điển Anh-Việt',
                'gia' => 115000,
                'hinh_anh' => 'tu-dien-anh-viet.webp',
            ],
            [
                'ten' => 'Luyện thi Ielts',
                'gia' => 150000,
                'hinh_anh' => 'luyen-thi-ielts.jpg',
            ],
            [
                'ten' => 'Từ điển Anh-Việt',
                'gia' => 115000,
                'hinh_anh' => 'tu-dien-anh-viet.webp',
            ],
        ],
    ],
];

echo json_encode($dsLoaiSanPham);
