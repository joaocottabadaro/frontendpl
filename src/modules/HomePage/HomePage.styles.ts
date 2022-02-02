import styled from "styled-components";
import { Toolbar as ToolbarMaterial } from "@mui/material";
import { theme } from "../../styles/theme";
import Button from "../../Components/Button/Button";

const { mainColor, contrastColor, offwhite, white } = theme.colors;

const background = require("../../assets/Images/pokemon.png");

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 10vw;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media all and (max-width: 650px) {
    height: 18vw;
  }

  img {
    margin-left: -56px;
    height: 40px;

    @media all and (max-width: 1300px) {
      height: 30px;
      margin-left: -40px;
    }
  }
`;

export const Toolbar = styled(ToolbarMaterial)`
  display: flex;
  background: transparent
    linear-gradient(272deg, ${contrastColor} 0%, ${mainColor} 100%) 0% 0%
    no-repeat padding-box;
`;

export const SearchBar = styled.input`
  background: ${white} 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  width: 75%;
  border: none;
  padding: 0.8rem;
  height: 20%;
`;

export const ContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 5vh 0;

  @media all and (max-width: 680px) {
    flex-direction: column-reverse;
    gap: 1vh;
  }
`;

export const ContentHeader = styled.h3`
  font-size: 2rem;
  color: ${mainColor};
  font-weight: 400;
  text-align: center;
  @media all and (max-width: 650px) {
    font-size: 1.5rem;
  }
`;
export const ContentMessage = styled.h3`
  font-size: 2rem;
  color: ${mainColor};
  font-weight: 400;
  text-align: center;
  margin: 7vw;
`;

export const ContentContainer = styled.div`
  background-color: ${offwhite};
`;

export const WrapperContentHeader = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ModalTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 3vh;
`;
export const ModalBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
  margin-top: 1vh;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CloseButton = styled(Button)`
  @media all and (min-width: 1900px) {
    width: 40%;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;
  width: 75%;

  @media all and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (max-width: 470px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3% 0;
`;
