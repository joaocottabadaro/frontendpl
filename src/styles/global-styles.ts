import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

const { Poppins } = theme.fonts;

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: ${Poppins};
    font-size: 1rem;
  }
.App{
  background-color:#f6f4f6 ;
  height:100vh;
}
`;
