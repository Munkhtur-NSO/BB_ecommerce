"use client";

import Quantity from "@/components/product/quantity";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartDispatch } from "@/contexts/cart";
import moment from "moment";
import { getAddCart } from "@/framework/cart";
import { toast } from "react-toastify";
import { useModal } from "@/contexts/mapModalContext";

const displayToastDone = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const displayToastError = (message: string) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default function ClientProductDetail({ id, product }: any) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { setCart } = useCartDispatch();
  const currentDate = moment().format("YYYY-MM-DD");
  // @ts-ignore
  const { openModal } = useModal();
  const addToCart = async () => {
    setLoading(true);
    let itemData = {};
    itemData = {
      userId: 1,
      date: currentDate,
      products: [{ productId: product?.id, quantity: Number(quantity) }],
    };

    setLoading(true);
    try {
      getAddCart(itemData)
        .then(async (res) => {
          console.log("res", res);
          setCart(res);
          displayToastDone("Сагсанд амжилттай нэмэгдлээ");
        })
        .catch(() => displayToastError("Сагсанд нэмэх амжилтгүй боллоо"));

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const quantityChange = (quantity: any) => {
    setQuantity(quantity);
  };
  return (
    <>
      <div className="container py-5">
        {product ? (
          <div className="row" key={1}>
            <div className="col-md-5">
              <div className="main-img">
                <Image
                  width={50}
                  height={50}
                  className="w-100 h-auto"
                  src={product?.image}
                  alt="ProductS"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="main-description px-2">
                <div className="category text-bold">
                  Category: {product?.category}
                </div>
                Modal
                <button
                  type="button"
                  className="btn btnV3 btn-main bg-blur rounded-circle p-3 shadow mb-3"
                  onClick={() => openModal("testModal")}
                ></button>
                <div className="product-title text-bold my-3">
                  {product?.title}
                </div>
                <div className="price-area my-4">
                  <p className="old-price mb-1">
                    <del>$100</del>
                    <span className="old-price-discount text-danger">
                      (20% off)
                    </span>
                  </p>
                  <p className="new-price text-bold mb-1">
                    Price: ${product?.price}
                  </p>
                  <p className="old-price mb-1">
                    Rating: rate - {product?.rating?.rate}, count -{" "}
                    {product?.rating?.count}
                  </p>
                </div>
                <Quantity onChange={quantityChange} />
                <div className="buttons d-flex my-5">
                  <div className="block">
                    <Link href="#" className="shadow btn custom-btn ">
                      Wishlist
                    </Link>
                  </div>
                  <div className="block">
                    <button
                      className="shadow btn custom-btn"
                      onClick={addToCart}
                    >
                      {loading && <>Уншиж байна...</>}
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-details my-4">
                <p className="details-title text-color mb-1">Product Details</p>
                <p className="description">{product?.description}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
