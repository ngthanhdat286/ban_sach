import { Routes, Route } from 'react-router-dom';
import './bootstrap/css/bootstrap.min.css';
import './App.css';
import './custom.css';
import Header from './components/header';
import Footer from './components/footer';
import TrangChu from './pages/trang-chu';
import TrangSanPham from './pages/trang-san-pham';
import TrangChiTiet from './pages/trang-chi-tiet';
import GioHang from './pages/gio-hang';
import ThanhToan from './pages/thanh-toan';
import DangNhap from './pages/dang-nhap';
import DangKy from './pages/dang-ky';

function App() {
    return (
        <div>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<TrangChu />} />
                    <Route path="/trang-san-pham" element={<TrangSanPham />} />
                    <Route path="/trang-chi-tiet" element={<TrangChiTiet />} />
                    <Route path="/gio-hang" element={<GioHang />} />
                    <Route path="/thanh-toan" element={<ThanhToan />} />
                    <Route path="/dang-nhap" element={<DangNhap />} />
                    <Route path="/dang-ky" element={<DangKy />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
