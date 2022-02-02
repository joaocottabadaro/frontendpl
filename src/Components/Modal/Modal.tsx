import { memo } from "react";
import * as Styled from "./Modal.styles";
import { MdClose } from "react-icons/md";

type ModalProps = {
  topComponent?: React.ReactNode;
  bottomComponent?: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal = ({
  topComponent,
  bottomComponent,
  open,
  onClose,
}: ModalProps) => {
  return (
    <Styled.Modal open={open} onClose={onClose}>
      <Styled.ModalHeader>
        <Styled.CloseIcon onClick={() => onClose()}>
          <MdClose />
        </Styled.CloseIcon>
      </Styled.ModalHeader>

      {topComponent}
      <Styled.Separator />
      {bottomComponent}
    </Styled.Modal>
  );
};

export default memo(Modal);
