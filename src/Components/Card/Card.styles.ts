import styled from "styled-components";
import { Button as ButtonMaterial } from "@mui/material";

import { theme } from "../../styles/theme";

const { white, whiteOpacity } = theme.colors;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${white};
  box-shadow: 0px 3px 6px ${whiteOpacity};
  border: 1px solid ${whiteOpacity};
  border-radius: 8px;
`;

export const CardTitle = styled.h3`
  text-align: center;
  padding: 1vw 0;
  font-size: 0.9rem;
  text-transform: capitalize;
`;

export const CardSubtitle = styled.div`
  text-align: center;
  padding: 3%;
  font-size: 1.2rem;
`;
export const CardInfo = styled.div`
  display: flex;
  gap: 1vw;
  text-transform: capitalize;
  font-weight: 100;
  padding-bottom: 2%;
`;

export const CardFooter = styled.div`
  display: flex;
  margin-top: auto;
  width: 100%;
  justify-content: space-around;
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.06);
  border-radius: 0px 0px 8px 8px;
  opacity: 1;
  padding: 3px 0;
`;

export const ButtonFooter = styled(ButtonMaterial)`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  gap: 10%;
  span {
    text-transform: capitalize;
    color: #263238;
    opacity: 0.48;
    font-size: 0.9rem;
  }
`;
