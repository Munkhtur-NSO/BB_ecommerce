"use client";

import CustomModal from "./CustomModal";

import TestModal from "./testModal";
import { useModal } from "../../contexts/mapModalContext";
import ClientLogin from "@/container/clientLogin";

const ModalContentFull = () => {
  const { modal } = useModal();
  console.log(modal);
  return (
    <CustomModal modalId={modal?.id} fullscreen={true}>
      {modal?.id === "testModal" && <TestModal />}
      {modal?.id === "Login" && <ClientLogin />}
      {modal?.id === "testModal2" && <TestModal />}
      {modal?.id === "testModal3" && <TestModal />}
      {modal?.id === "testModal4" && <TestModal />}
    </CustomModal>
  );
};

export default ModalContentFull;
