import React, { useContext, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import styles from "./styles.module.scss";
import { ucFirst } from "../../helpers/upperFirst";
import classnames from "classnames";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const types = [
  "grass",
  "fire",
  "bug",
  "fairy",
  "dragon",
  "shadow",
  "ground",
  "normal",
  "psychic",
  "steel",
  "dark",
  "electric",
  "fighting",
  "flying",
  "ice",
  "poison",
  "rock",
  "water",
];
export const FilterBar = () => {
  const { active, handleCheckbox } = useContext(PokemonContext);
  const [openedFilter, setOpenedFilter] = useState(true);

  return (
    <div
      className={classnames(styles.wrapper, {
        [styles.active]: active,
      })}
    >
      <div className={styles.filterGroup}>
        <div className={styles.filterBy}>
          <div className={styles.filterHeader}>
            <h2>By type</h2>
            <button
              className={classnames(styles.filterToggle, {
                [styles.active]: openedFilter,
              })}
              onClick={() => setOpenedFilter((val) => !val)}
            >
              <MdOutlineKeyboardArrowDown />
            </button>
          </div>
          {openedFilter && (
            <div className={styles.filterItems}>
              {types.map((type) => (
                <div className={styles.filterItem} key={type}>
                  <input
                    type="checkbox"
                    onChange={handleCheckbox}
                    name={type}
                    id={type}
                  />
                  <label htmlFor={type}>{ucFirst(type)}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
