import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Loader } from "../loader/Loader";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { ImCross } from "react-icons/im";
import { ucFirst} from '../../helpers/upperFirst';

export const PokemonDetails = ({ id, closeSelectedPokemon }) => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [stats, setStats] = useState([]);


  const processedPokemon = (pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites?.other.dream_world.front_default,
      type: pokemon.types.map((type) => type.type.name),
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      hp: pokemon.stats[0].base_stat,
      specialAttack: pokemon.stats[3].base_stat,
      specialDefense: pokemon.stats[4].base_stat,
      speed: pokemon.stats[5].base_stat,
      weight: pokemon.weight,
      totalMoves: pokemon.moves.length,
    };
  };

  const processedStats = () => {
    const filteredPokemon = {
      ...pokemon,
    };

    delete filteredPokemon.id;
    delete filteredPokemon.name;
    delete filteredPokemon.image;
    delete filteredPokemon.type;

    const stats =  Object.entries(filteredPokemon).map(([key, val]) => ({ key, value: val}))
    setStats(stats);
  };


  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    const pokemon = processedPokemon(data);
    setPokemon(pokemon);
    processedStats();
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  return (
    <>
      {id && (
        <>
          {loading ? (
            <Loader />
          ) : (
            <div className={styles.wrapper}>
              <div className={styles.pokemonCard}>
                <button onClick={closeSelectedPokemon} className={styles.close}>
                  <ImCross />
                </button>
                <div className={styles.pokemonImage}>
                  <img src={pokemon.image} alt={`Pokemon ${pokemon?.name}`} />
                </div>
                <h1 className={styles.pokemonName}>
                  {pokemon.name} #{pokemon.id}
                </h1>
                <div className={styles.stats}>
                  <div className={styles.statsItem}>
                    <div className={styles.statsItemContent}>
                      {pokemon.type.length > 1 ? (
                        <span className={styles.statsLabel}>Types</span>
                      ) : (
                        <span className={styles.statsLabel}>Type</span>
                      )}
                      <div className="types mt-0">
                        {pokemon.type.map((type) => (
                          <span className={classnames(styles.statsValue, type)} key={type}>
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {stats && stats.map(({key, value}) => (
                      <div className={styles.statsItem} key={key}>
                        <div className={styles.statsItemContent}>
                          <span className={styles.statsLabel}>{ucFirst(key)}</span>
                          <span className={styles.statsValue}>
                        {value}
                      </span>
                        </div>
                        {key !== 'weight' && key !== 'totalMoves' &&<div className={styles.statsBar}>
                          <div
                              className={styles.statsBarFilled}
                              style={{ width: `${pokemon.attack}%` }}
                          ></div>
                        </div>}
                      </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
