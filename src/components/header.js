import { NavLink } from 'react-router-dom';
import Search from './header/search';
import Menu from './header/menu';

function Header() {
    return (
        <div>
            <header className="py-3 border-bottom header">
                <div className="container d-flex flex-wrap justify-content-start align-items-center">
                    <NavLink
                        to="/"
                        className="flex-fill d-flex align-items-center mb-3 mb-lg-0 text-dark text-decoration-none"
                    >
                        <img className="logo-img" src="logo.jpg" alt="" />
                    </NavLink>
                    <Search />
                    <ul className="flex-fill nav justify-content-end">
                        <li className="nav-item">
                            <NavLink to="/dang-nhap" className="nav-link link-danger px-2">
                                Đăng nhập
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dang-ky" className="nav-link link-primary px-2">
                                Đăng ký
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
            <Menu />
        </div>
    );
}

export default Header;
