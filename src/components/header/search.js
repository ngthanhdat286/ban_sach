function Search() {
    return (
        <form className="flex-fill d-flex mb-3 mb-lg-0 justify-content-center" role="search">
            <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">
                Search
            </button>
        </form>
    );
}

export default Search;
