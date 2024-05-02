import ModalContentFull from "../../../components/modal/modalContextFull";

export default function MapLayout({ children }: any) {
  return (
    <>
      <ModalContentFull />
      {children}
    </>
  );
}
