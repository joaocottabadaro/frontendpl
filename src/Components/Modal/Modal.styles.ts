import styled from "styled-components";
import Dialog from "@mui/material/Dialog";

import { theme } from "../../styles/theme";

const { mainColor, white , white20 } = theme.colors;

export const Modal = styled(Dialog)`
  .MuiDialog-paper {
    overflow-y: visible;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: -26px;
  margin-right: -21px;
  background: ${mainColor};
  cursor: pointer;
  svg {
    color: ${white};
  }
`;

export const Separator = styled.div`
  width: 95%;
  height: 1px;
  border: 1px solid ${white20};
  background-color: ${white20};
  opacity: 1;
  margin: 2vh auto;
`;
