import { theme } from "../../../styles/theme";
import * as Styled from "../HomePage.styles";

const { mainColor } = theme.colors;
const maintenance =
  require("../../../assets/Icons/icon-maintenance.svg").default;

type ModalProps = {
  handleModalClose: () => void;
};
export function ModalTop() {
  return (
    <Styled.ModalTopContainer>
      <img src={maintenance} alt="gear"></img>
      <h1>Atenção, função em manutenção</h1>
    </Styled.ModalTopContainer>
  );
}
export function ModalBottom({ handleModalClose }: ModalProps) {
  return (
    <Styled.ModalBottomContainer>
      <Styled.CloseButton
        backgroundColor={mainColor}
        width={`20%`}
        onClick={handleModalClose}
      >
        fechar
      </Styled.CloseButton>
    </Styled.ModalBottomContainer>
  );
}
