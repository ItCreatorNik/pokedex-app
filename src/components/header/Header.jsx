import { useContext, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { MobileSearch } from "../mobileSearch/MobileSearch";
import { PokemonContext } from "../../context/PokemonContext";
import { IoMdOptions } from "react-icons/io";
import styles from "./styles.module.scss";
import classnames from "classnames";
import { SearchInput } from "../searchInput/SearchInput";
import { useCheckDesk } from "../../hooks/useMobile";

export const Header = () => {
  const { active, setActive } = useContext(PokemonContext);

  const { isMobile } = useCheckDesk();

  return (
    <>
      <header
        className={classnames(styles.header, {
          container: true,
        })}
      >
        <Link to="/" className={styles.logo}>
          <h1>{"Pokedex".toUpperCase()}</h1>
        </Link>

        <div className={styles.headerLeft}>
          {isMobile ? <MobileSearch /> : <SearchInput />}
          <button
            className={styles.filterBtn}
            onClick={() => setActive(!active)}
          >
            <IoMdOptions className={styles.filterBtnIcon} />
          </button>
        </div>
      </header>

      <Outlet />
    </>
  );
};
