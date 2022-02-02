import { memo, useEffect, useState } from "react";
import * as Styled from "./Card.styles";
const EditIcon = require("../../assets/Icons/icon-edit-azul.svg").default;
const TrashIcon = require("../../assets/Icons/icon-trash.svg").default;

type CardProps = {
  name: string;
  onOpen: () => void;
};

type PokemonCardSprite = { front_default: string };

type PokemonCardType = { slot: number; type: { name: string } };

type PokemonCard = {
  name: string;
  sprites?: PokemonCardSprite;
  types?: PokemonCardType[];
};
function Card({ name, onOpen }: CardProps) {
  const [pokemon, setPokemon] = useState<PokemonCard>({
    name: "",
    sprites: undefined,
    types: undefined,
  });
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((resultPokemon) => {
        setPokemon(resultPokemon);
      });
  }, [name]);

  return (
    <Styled.Container>
      <Styled.CardTitle>{name}</Styled.CardTitle>
      <img
        src={pokemon && pokemon?.sprites?.front_default}
        alt={`pokemon`}
      ></img>

      <Styled.CardSubtitle>Type</Styled.CardSubtitle>
      <Styled.CardInfo>
        {pokemon &&
          pokemon?.types?.map((pokemonType: PokemonCardType, index: number) => (
            <li key={index}>{pokemonType?.type?.name}</li>
          ))}
      </Styled.CardInfo>
      <Styled.CardFooter>
        <Styled.ButtonFooter onClick={() => onOpen()}>
          <img src={TrashIcon} alt="lixo" />
          <span>Excluir</span>
        </Styled.ButtonFooter>
        <Styled.ButtonFooter onClick={() => onOpen()}>
          <img src={EditIcon} alt="editar" />
          <span>Editar</span>
        </Styled.ButtonFooter>
      </Styled.CardFooter>
    </Styled.Container>
  );
}

export default memo(Card);
