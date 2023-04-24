import React from "react";
import { PokemonProvider } from "./context/PokemonProvider";
import { AppRouter } from "./routes/AppRouter";
import { FilterBar } from "./components/filterBar/FilterBar";

export const App = () => {
  return (
    <PokemonProvider>
      <AppRouter />
      <FilterBar />
    </PokemonProvider>
  );
};
