import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PokemonContext } from "../../context/PokemonContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { SearchInput } from "../searchInput/SearchInput";

export const MobileSearch = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <button
        className={styles.activator}
        onClick={() => setShowInput((val) => !val)}
      >
        <CiSearch />
      </button>
      {showInput && (
        <div className={styles.search}>
          <SearchInput handleClose={() => setShowInput(false)} />
        </div>
      )}
    </>
  );
};
