import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";
import { HomePage, SearchPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
