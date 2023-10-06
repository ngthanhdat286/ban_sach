function DangKy() {
    return (
        <div class="container w-75">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <h2 class="my-4">Đăng Ký</h2>
                    <form>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start">
                                <label for="username" class="form-label">
                                    Tên đăng nhập:
                                </label>
                            </div>
                            <input type="text" class="form-control" id="username" placeholder="Nhập tên đăng nhập" />
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start">
                                <label for="password" class="form-label">
                                    Mật khẩu:
                                </label>
                            </div>
                            <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu" />
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start">
                                <label for="phone" class="form-label">
                                    Số điện thoại:
                                </label>
                            </div>
                            <input type="tel" class="form-control" id="phone" placeholder="Nhập số điện thoại" />
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start">
                                <label for="email" class="form-label">
                                    Email:
                                </label>
                            </div>
                            <input type="email" class="form-control" id="email" placeholder="ex@gmail.com" />
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-start">
                                <label for="address" class="form-label">
                                    Địa chỉ:
                                </label>
                            </div>
                            <input type="text" class="form-control" id="address" placeholder="Nhập địa chỉ" />
                        </div>
                        <div class="mb-3 form-check">
                            <div class="d-flex justify-content-center">
                                <input type="checkbox" class="form-check-input mx-2" id="acceptTerms" />
                                <label class="form-check-label" for="acceptTerms">
                                    Tôi chấp nhận điều khoản
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Đăng Ký
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DangKy;
