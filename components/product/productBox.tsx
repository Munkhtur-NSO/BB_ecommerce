import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  productDetail: any;
}

const ProductBox: React.FC<Props> = (props) => {
  const { productDetail } = props;
  const product = productDetail;
  console.log("product", product);
  return (
    <div className={"col"}>
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img">
          <Image
            src={product?.image}
            className="img-fluid w-100 rounded-top"
            width={300}
            height={210}
            placeholder="blur"
            blurDataURL={product?.image}
            alt=""
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: "10px", left: "10px" }}
        >
          {product?.title}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4>{product?.category}</h4>
          <p>{product?.description.substr(0, 50)}</p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">{product?.price}</p>
            <Link
              href={`/product/${product?.id}`}
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
              Дэлгэрэнгүй
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
