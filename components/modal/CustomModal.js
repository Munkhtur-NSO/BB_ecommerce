import { Modal, Fade } from "react-bootstrap";
import { useModal } from "@/contexts/mapModalContext";

const CustomModal = ({ modalId, children, fullscreen }) => {
  const { modal, closeModal } = useModal();
  const show = modal.id && modal.id === modalId;

  function handleIsFullscreen() {
    switch (modalId) {
      case "testModal":
        return false;
      case "testModal1":
        return false;
      default:
        return false;
    }
  }
  //'sm' | 'lg' | 'xl' | 'xxl'
  function handleIsSize() {
    switch (modalId) {
      case "rent30ModalInformation":
        return "";
      case "reportModalBroken":
        return "";
      default:
        return true;
    }
  }

  return (
    <Modal
      show={show}
      onHide={closeModal}
      fullscreen={handleIsFullscreen()}
      size={handleIsSize()}
    >
      <Modal.Body className="border-0 rounded-4 p-3 overflow-y-auto">
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
