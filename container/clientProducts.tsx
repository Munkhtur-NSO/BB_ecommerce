"use client";

import Link from "next/link";

export default function ClientProducts({ products }: any) {
  console.log("products", products);
  return (
    <>
      <div className="hero overlay inner-page bg-primary py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center pt-5">
            <div className="col-lg-6">
              <h1 className="heading text-white mb-3" data-aos="fade-up">
                Мэдээний жагсаалт
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section search-result-wrap">
        <div className="container">
          <div className="row posts-entry">
            <div className="col-lg-8">
              {products &&
                products?.map((product: any, index: number) => {
                  return (
                    <div
                      className="blog-entry d-flex blog-entry-search-item"
                      key={index}
                    >
                      <Link
                        href={`/product/${product?.id}`}
                        className="img-link me-4"
                      >
                        <img
                          src={product?.image}
                          alt="Image"
                          className="img-fluid"
                        />
                      </Link>
                      <div>
                        <span className="date">
                          <>{product?.price}</>{" "}
                          <Link href="#">{product?.category}</Link>
                        </span>
                        <h2>
                          <Link href={`/product/${product?.id}`}>
                            {product?.title}
                          </Link>
                        </h2>
                        <p>{product?.description}</p>
                        <p>
                          <Link
                            href={`/product/${product?.id}`}
                            className="btn btn-sm btn-outline-primary"
                          >
                            Дэлгэрэнгүй
                          </Link>
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap mb-4">
                <form action="#" className="sidebar-search-form">
                  <span className="bi-search"></span>
                  <input
                    type="text"
                    className="form-control"
                    id="s"
                    placeholder="Type a keyword and hit enter"
                  />
                </form>
              </div>

              <div className="sidebar-box">
                <h3 className="heading">Popular Posts</h3>
                <div className="post-entry-sidebar">
                  <ul>
                    <li>
                      <a href="">
                        <img
                          src="images/img_1_sq.jpg"
                          alt="Image placeholder"
                          className="me-4 rounded"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="images/img_2_sq.jpg"
                          alt="Image placeholder"
                          className="me-4 rounded"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="images/img_3_sq.jpg"
                          alt="Image placeholder"
                          className="me-4 rounded"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sidebar-box">
                <h3 className="heading">Categories</h3>
                <ul className="categories">
                  <li>
                    <a href="#">
                      Food <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Travel <span>(22)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle <span>(37)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Business <span>(42)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Adventure <span>(14)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-box">
                <h3 className="heading">Tags</h3>
                <ul className="tags">
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Adventure</a>
                  </li>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Freelancing</a>
                  </li>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Adventure</a>
                  </li>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Freelancing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
