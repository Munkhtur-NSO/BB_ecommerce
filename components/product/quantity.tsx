import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Quantity = ({ onChange }: any) => {
  const [quantity, setQuantity] = useState(1);

  const removeClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addClick = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };
  const handleQuantity = (e: any) => {
    const val = Number(e.target.value);
    if (Number.isInteger(val) && val >= 1 && val <= 99) {
      setQuantity(val);
    }
  };

  useEffect(() => {
    onChange(quantity);
  }, [quantity]);

  return (
    <div className="product-count d-flex align-items-start">
      <div className="d-flex align-items-center flex-column">
        <form
          action=""
          className="d-flex align-items-center justify-content-center"
        >
          <div className="input-group quantity mb-5" style={{ width: "100px" }}>
            <div className="input-group-btn">
              <button
                type={"button"}
                className="btn btn-sm btn-minus rounded-circle bg-light border"
                onClick={removeClick}
                disabled={quantity <= 1}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
            <input
              type="text"
              className="form-control form-control-sm text-center border-0"
              value={quantity}
              onChange={handleQuantity}
            />
            <div className="input-group-btn">
              <button
                type={"button"}
                className="btn btn-sm btn-plus rounded-circle bg-light border"
                onClick={addClick}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Quantity;
