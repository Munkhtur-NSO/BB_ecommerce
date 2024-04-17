import Link from "next/link";
import React from "react";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <Link
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            logo
          </Link>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link href="/" className="nav-link px-2 link-secondary">
                Нүүр
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link px-2 link-dark">
                Бидний тухай
              </Link>
            </li>
            <li>
              <Link href="/products" className="nav-link px-2 link-dark">
                Бүтээгдэхүүн
              </Link>
            </li>
            <li>
              <Link href="/news" className="nav-link px-2 link-dark">
                Мэдээ мэдээлэл
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link px-2 link-dark">
                Холбоо барих
              </Link>
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
      {children}
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">footer</div>
      </footer>
    </div>
  );
}
