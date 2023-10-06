function DangNhap() {
    return (
        <main class="form-signin w-100 m-auto">
            <form>
                <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 class="h3 mb-3 fw-normal">Đăng nhập</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Tên đăng nhập..." />
                    <label for="floatingInput">Tên đăng nhập</label>
                </div>

                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Mật khẩu..." />
                    <label for="floatingPassword">Mật khẩu</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Lưu mật khẩu
                    </label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">
                    Đăng nhập
                </button>

                <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
        </main>
    );
}

export default DangNhap;
