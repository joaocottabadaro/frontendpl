import styled from "styled-components";
import { Button as ButtonMaterial } from "@mui/material";

import { theme } from "../../styles/theme";

const { Poppins } = theme.fonts;

type ButtonStyleProps = {
  buttonBackgroundColor?: string;
  width?: string;
  height?: string;
  buttonColor?: string;
};

export const Button = styled(ButtonMaterial)<ButtonStyleProps>`
  background-color: ${(props) => props.buttonBackgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.buttonColor};
  box-sizing: border-box;
  text-transform: capitalize;
  font-family: ${Poppins};
  height: 48px;
  border-radius: 8px;
  white-space: nowrap;
`;
