import React, { memo } from "react";
import * as Styled from "../HomePage.styles";
const search = require("../../../assets/Icons/icon-search.svg").default;

type HeaderType = {
  handleOnchangeSetValue: (value: string) => void;
};

function Header({ handleOnchangeSetValue }: HeaderType) {
  return (
    <Styled.HeaderContainer>
      <>
        <Styled.SearchBar
          id="filled-hidden-label-small"
          placeholder="Digite aqui sua busca..."
          onChange={(e) => handleOnchangeSetValue(e.target.value)}
        />
        <img src={search} alt="search"></img>
      </>
    </Styled.HeaderContainer>
  );
}

export default memo(Header);
