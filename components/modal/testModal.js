"use client";

import React from "react";
import { useModal } from "@/contexts/mapModalContext";

const TestModal = () => {
  const { closeModal } = useModal();
  return (
    <>
      <div className="modal-content border-0 rounded-4 p-3 gap-3">
        <div className="d-flex align-items-center">
          <h4 className="flex-grow-1 fs-6 fw-extra text-uppercase m-0 fc-darkColor">
            МЭДЭЭЛЭЛ
          </h4>
          <button
            type="button"
            className="btn btnV3 btn-light d-flex p-2 justify-content-center rounded-4"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeModal}
          >
            <img
              src="/images/v3icons/dark=times.svg"
              alt=""
              className="w-20 h-20"
            />
          </button>
        </div>
        <div className="d-flex flex-column gap-3">
          <div className="d-flex gap-3 align-items-center">
            sdfsdkfnsdjkfhs sdfsdfsdf sdfsdf sdf sdfsdfsdf sdfsdfsdf sdfsdfsdf
          </div>
        </div>
      </div>
    </>
  );
};

export default TestModal;
