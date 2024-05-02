"use client";

import CustomModal from "./CustomModal";

import TestModal from "./testModal";
import { useModal } from "../../contexts/mapModalContext";

const ModalContentFull = () => {
  const { modal } = useModal();
  return (
    <CustomModal modalId={modal?.id} fullscreen={true}>
      {modal?.id === "testModal" && <TestModal />}
      {modal?.id === "testModal1" && <TestModal />}
      {modal?.id === "testModal2" && <TestModal />}
      {modal?.id === "testModal3" && <TestModal />}
      {modal?.id === "testModal4" && <TestModal />}
    </CustomModal>
  );
};

export default ModalContentFull;
