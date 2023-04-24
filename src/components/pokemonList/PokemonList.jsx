import React, { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { CardPokemon } from "../cardPokemon/CardPokemon";
import { Loader } from "../loader/Loader";
import styles from "./styles.module.scss";
import classnames from "classnames";

export const PokemonList = ({ selectPokemon }) => {
  const { allPokemons, loading, filteredPokemons, onClickLoadMore } =
    useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div
            className={classnames(styles.list, {
              container: true,
            })}
          >
            {filteredPokemons.length ? (
              <>
                {filteredPokemons.map((pokemon) => (
                  <CardPokemon
                    selectPokemon={selectPokemon}
                    pokemon={pokemon}
                    key={pokemon.id}
                  />
                ))}
              </>
            ) : (
              <>
                {allPokemons.map((pokemon) => (
                  <CardPokemon
                    selectPokemon={selectPokemon}
                    pokemon={pokemon}
                    key={pokemon.id}
                  />
                ))}
              </>
            )}
          </div>
          <div className={styles.loadMoreWrapper}>
            <button className={styles.loadMore} onClick={onClickLoadMore}>
              Load More
            </button>
          </div>
        </div>
      )}
    </>
  );
};
