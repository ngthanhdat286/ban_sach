import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <nav className="py-2 mb-4 border-bottom">
                <div className="container d-flex justify-content-between">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link link-dark px-2 active" aria-current="page">
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link link-dark px-2">
                                Về chúng tôi
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link link-dark px-2">
                                Sản phẩm
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link link-dark px-2">
                                Tin tức
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link link-dark px-2">
                                Liên hệ
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to="/gio-hang" className="nav-link link-dark py-2 mx-5">
                        Giỏ hàng
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Menu;
