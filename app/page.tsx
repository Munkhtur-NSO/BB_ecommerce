export default function Home() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            logo
          </a>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                Нүүр
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Бидний тухай
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Бүтээгдэхүүн
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Мэдээ мэдээлэл
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-dark">
                Холбоо барих
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Нэвтрэх
            </button>
            <button type="button" className="btn btn-primary">
              Бүртгүүлэх
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
