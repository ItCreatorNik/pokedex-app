import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const SearchInput = ({ handleClose }) => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);
  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
    handleClose();
  };

  return (
    <form className={styles.form} onSubmit={onSearchSubmit}>
      <div className={styles.formGroup}>
        <CiSearch className={styles.searchIcon} />
        <input
          className={styles.searchInput}
          type="search"
          name="valueSearch"
          id=""
          value={valueSearch}
          onChange={onInputChange}
          placeholder="Search by name"
        />
      </div>

      <button className={styles.searchBtn}>Search</button>
    </form>
  );
};
