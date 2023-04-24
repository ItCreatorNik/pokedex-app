import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../../components/cardPokemon/CardPokemon";
import { PokemonContext } from "../../context/PokemonContext";
import styles from "./styles.module.scss";

export const SearchPage = () => {
  const location = useLocation();


  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div className="container">
      <p className={styles.text}>
        Were found <span>{filteredPokemons.length}</span> results:
      </p>
      <div className={styles.list}>
        {filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
