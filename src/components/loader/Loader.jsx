import React from "react";
import { DotSpinner } from "@uiball/loaders";
import styles from "./styles.module.scss";

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <DotSpinner size={40} speed={0.9} color="black" />
    </div>
  );
};
