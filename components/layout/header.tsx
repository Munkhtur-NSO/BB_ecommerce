"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="container-fluid fixed-top">
      <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-marker-alt me-2 text-secondary"></i>{" "}
              <a href="#" className="text-white">
                Ulaannbaatar, Mongolia, 210648
              </a>
            </small>
            <small className="me-3">
              <i className="fas fa-envelope me-2 text-secondary"></i>
              <Link href="#" className="text-white">
                info@bloomza.com
              </Link>
            </small>
          </div>
          <div className="top-link pe-2">
            <Link href="#" className="text-white">
              <small className="text-white mx-2">Нууцлалын бодлого</small>/
            </Link>
            <Link href="#" className="text-white">
              <small className="text-white mx-2">Үйлчилгээний нөхцөл</small>/
            </Link>
            <Link href="#" className="text-white">
              <small className="text-white ms-2">Хямдрал буцаалт</small>
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <Link href="/" className="navbar-brand">
            <h1 className="text-primary display-6">Bloomza</h1>
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <Link
                href="/"
                className={`nav-item nav-link ${pathname === "/" ? "active" : ""}`}
              >
                Нүүр
              </Link>
              <Link
                href="/shop"
                className={`nav-item nav-link ${pathname === "/shop" ? "active" : ""}`}
              >
                Дэлгүүр
              </Link>
              <Link
                href="/about"
                className={`nav-item nav-link ${pathname === "/about" ? "active" : ""}`}
              >
                Бидний тухай
              </Link>
              <div className="nav-item dropdown">
                <Link
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Бусад
                </Link>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <Link href="/clientcomponent" className="dropdown-item">
                    Client component
                  </Link>
                  <Link href="/servercomponent" className="dropdown-item">
                    Server component
                  </Link>
                  <Link href="/clientProducts" className="dropdown-item">
                    client Product
                  </Link>
                  <Link href="/news" className="dropdown-item">
                    Мэдээ
                  </Link>
                </div>
              </div>
              <Link
                href="/contact"
                className={`nav-item nav-link ${pathname === "/contact" ? "active" : ""}`}
              >
                Холбоо барих
              </Link>
            </div>
            <div className="d-flex m-3 me-0">
              <button
                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search text-primary"></i>
              </button>
              <Link href="#" className="position-relative me-4 my-auto">
                <i className="fa fa-shopping-bag fa-2x"></i>
                <span
                  className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style={{
                    top: "-5px",
                    left: "15px",
                    height: "20px",
                    minWidth: "20px",
                  }}
                >
                  3
                </span>
              </Link>
              <Link href="#" className="my-auto">
                <i className="fas fa-user fa-2x"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
