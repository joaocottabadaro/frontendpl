import { Pagination } from "@mui/material";
import { memo } from "react";
import Button from "../../../Components/Button/Button";
import Card from "../../../Components/Card/Card";
import * as Styled from "../HomePage.styles";
import { theme } from "../../../styles/theme";

const { mainColor } = theme.colors;

type ContentPokemonProp = {
  name: string;
};

type ContentProp = {
  pokemon: ContentPokemonProp[];
  totalPages: number;
  nextPage: (page: number) => void;
  handleModalOpen: () => void;
};

function Content({
  pokemon,
  totalPages,
  nextPage,
  handleModalOpen,
}: ContentProp) {
  return (
    <>
      <Styled.ContentContainer>
        <Styled.WrapperContentHeader>
          <Styled.ContentHeaderContainer>
            <Styled.ContentHeader>Resultado de busca </Styled.ContentHeader>
            <>
              <Button
                backgroundColor={mainColor}
                width={`173px`}
                onClick={handleModalOpen}
              >
                Novo Card
              </Button>
            </>
          </Styled.ContentHeaderContainer>
        </Styled.WrapperContentHeader>
        <Styled.CardsWrapper>
          <Styled.CardsContainer>
            {pokemon &&
              pokemon.map((pokemon: ContentPokemonProp, index: number) => (
                <Card
                  key={`card-${index}`}
                  onOpen={handleModalOpen}
                  name={pokemon.name}
                />
              ))}
          </Styled.CardsContainer>
        </Styled.CardsWrapper>
        {pokemon.length === 0 && (
          <Styled.ContentMessage>
            Nenhum pokemon encontrado
          </Styled.ContentMessage>
        )}
        <Styled.PaginationContainer>
          <Pagination
            count={totalPages}
            defaultPage={1}
            siblingCount={1}
            shape="rounded"
            onChange={(e, page) => nextPage(page)}
          />
        </Styled.PaginationContainer>
      </Styled.ContentContainer>
    </>
  );
}

export default memo(Content);
