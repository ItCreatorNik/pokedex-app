import React from "react";
import { ucFirst } from "../../helpers/upperFirst";
import styles from "./styles.module.scss";

export const CardPokemon = ({ pokemon, selectPokemon }) => {
  let name = ucFirst(pokemon.name);

  return (
    <div
      onClick={(e) => selectPokemon(e, pokemon.id)}
      className={styles.cardPokemon}
    >
      <div className={styles.cardThumbnail}>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${name}`}
        />
      </div>
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        <div className="types">
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
