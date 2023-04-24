import React, { useState } from "react";
import { PokemonList } from "../../components/pokemonList/PokemonList";
import { PokemonDetails } from "../../components/pokemonDetails/PokemonDetails";
import styles from "./styles.module.scss";

export const HomePage = () => {
  const [pokemonId, setPokemonId] = useState("");

  const selectPokemonId = (e, id) => {
    e.preventDefault();
    setPokemonId(id);
  };

  return (
    <>
      <div className={styles.contentWrapper}>
        <PokemonList selectPokemon={selectPokemonId} />
        <PokemonDetails
          id={pokemonId}
          closeSelectedPokemon={() => setPokemonId("")}
        />
      </div>
    </>
  );
};
