import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AppBar } from "@mui/material";
import * as Styled from "./HomePage.styles";
import Header from "./Partials/Header";
import Content from "./Partials/Content";
import { ModalTop, ModalBottom } from "./Partials/Modal";
import { pokedexModel } from "./services";
import Modal from "../../Components/Modal/Modal";

const logo = require("../../assets/Images/logo-teste.png");


type HomePagePokemonProp = {
  name: string;
};

export default function HomePage() {
  const [pokemon, setPokemon] = useState<HomePagePokemonProp[]>([{ name: "" }]);
  const [pokedex, setPokedex] = useState([
    ...JSON.parse(JSON.stringify(pokedexModel)),
  ]);

  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const didMount = useRef(false);

  const listPokemons = useCallback(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${offset}`)
      .then((r) => r.json())
      .then((json) => {
        setTotalPages(Math.round(json.count / 12) - 1);
        setPokemon(json.results);
      });
  }, [offset]);

  useEffect(() => {
    const getPokemons = async () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=2000`)
        .then((r) => r.json())
        .then((json) => {
          setPokedex(json.results);
        });
    };
    if (!didMount.current) {
      getPokemons();
    } else {
      didMount.current = true;
    }
  }, []);

  useEffect(() => {
    if (searchValue.length === 0) {
      listPokemons();
    }
  }, [offset, listPokemons, searchValue]);

  const pokemonsList = useMemo(() => {
    if (searchValue.length > 0) {
      const filteredPokedex = pokedex.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      setTotalPages(Math.round(filteredPokedex.length / 12 - 1));
      return filteredPokedex.slice(offset, offset + 12);
    }
    return pokemon;
  }, [searchValue, pokemon, pokedex, offset]);

  const handleOnchangeSetValue = useCallback((value) => {
    setSearchValue(value);
  }, []);

  const nextPage = useCallback((clickedPage) => {
    if (clickedPage === 1) {
      setOffset(0);
    } else {
      setOffset(clickedPage * 12);
    }
  }, []);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <Styled.Container>
      <AppBar position="sticky" style={{ backgroundColor: "white" }}>
        <Styled.Toolbar>
          <img alt="logo-principal" src={logo}></img>
        </Styled.Toolbar>
      </AppBar>
      <>
        <Header handleOnchangeSetValue={handleOnchangeSetValue} />
        <Content
          nextPage={nextPage}
          totalPages={totalPages}
          pokemon={pokemonsList}
          handleModalOpen={handleModalOpen}
        />
      </>

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        topComponent={<ModalTop />}
        bottomComponent={<ModalBottom handleModalClose={handleModalClose} />}
      />
    </Styled.Container>
  );
}
