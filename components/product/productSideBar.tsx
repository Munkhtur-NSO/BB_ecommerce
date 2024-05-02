import { useEffect, useState } from "react";
import { getAllCategories } from "@/framework/product";
import Link from "next/link";

export default function ProductSideBar() {
  const [categories, setCategories] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getAllCategories();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to fetch products:", error);
      }
    }

    fetchCategories();
  }, []);
  console.log(categories);
  return (
    <div className="row g-4">
      <div className="col-lg-12">
        <div className="mb-3">
          <h4>Categories</h4>
          <ul className="list-unstyled fruite-categorie">
            {categories &&
              categories?.map((category: any, index: number) => {
                return (
                  <li key={index}>
                    <div className="d-flex justify-content-between fruite-name">
                      <Link href={`/shop?category=${category}`}>
                        <i className="fas fa-apple-alt me-2"></i>
                        {category}
                      </Link>
                      <span>(3)</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="mb-3">
          <h4 className="mb-2">Price</h4>
          <input
            type="range"
            className="form-range w-100"
            id="rangeInput"
            name="rangeInput"
            min="0"
            max="500"
            value="0"
          />
          <output id="amount" name="amount" htmlFor="rangeInput">
            0
          </output>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="mb-3">
          <h4>Additional</h4>
          <div className="mb-2">
            <input
              type="radio"
              className="me-2"
              id="Categories-1"
              name="Categories-1"
              value="Beverages"
            />
            <label htmlFor="Categories-1"> Organic</label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              className="me-2"
              id="Categories-2"
              name="Categories-1"
              value="Beverages"
            />
            <label htmlFor="Categories-2"> Fresh</label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              className="me-2"
              id="Categories-3"
              name="Categories-1"
              value="Beverages"
            />
            <label htmlFor="Categories-3"> Sales</label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              className="me-2"
              id="Categories-4"
              name="Categories-1"
              value="Beverages"
            />
            <label htmlFor="Categories-4"> Discount</label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              className="me-2"
              id="Categories-5"
              name="Categories-1"
              value="Beverages"
            />
            <label htmlFor="Categories-5"> Expired</label>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <h4 className="mb-3">Featured products</h4>
        <div className="d-flex align-items-center justify-content-start">
          <div
            className="rounded me-4"
            style={{ width: "100px", height: "100px" }}
          >
            <img
              src="/images/featur-1.jpg"
              className="img-fluid rounded"
              alt=""
            />
          </div>
          <div>
            <h6 className="mb-2">Big Banana</h6>
            <div className="d-flex mb-2">
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="d-flex mb-2">
              <h5 className="fw-bold me-2">2.99 $</h5>
              <h5 className="text-danger text-decoration-line-through">
                4.11 $
              </h5>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <div
            className="rounded me-4"
            style={{ width: "100px", height: "100px" }}
          >
            <img
              src="/images/featur-2.jpg"
              className="img-fluid rounded"
              alt=""
            />
          </div>
          <div>
            <h6 className="mb-2">Big Banana</h6>
            <div className="d-flex mb-2">
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="d-flex mb-2">
              <h5 className="fw-bold me-2">2.99 $</h5>
              <h5 className="text-danger text-decoration-line-through">
                4.11 $
              </h5>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <div
            className="rounded me-4"
            style={{ width: "100px", height: "100px" }}
          >
            <img
              src="/images/featur-3.jpg"
              className="img-fluid rounded"
              alt=""
            />
          </div>
          <div>
            <h6 className="mb-2">Big Banana</h6>
            <div className="d-flex mb-2">
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star text-secondary"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="d-flex mb-2">
              <h5 className="fw-bold me-2">2.99 $</h5>
              <h5 className="text-danger text-decoration-line-through">
                4.11 $
              </h5>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-4">
          <a
            href="#"
            className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
          >
            Vew More
          </a>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="position-relative">
          <img
            src="/images/banner-fruits.jpg"
            className="img-fluid w-100 rounded"
            alt=""
          />
          <div className="position-absolute">
            <h3 className="text-secondary fw-bold">
              Fresh <br /> Fruits <br /> Banner
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
